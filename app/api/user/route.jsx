import { NextResponse } from "next/server";
import { db } from "@/configs/db"; // Database connection configuration
import { usersTable } from "@/configs/schema"; // Schema definition for the users table
import { eq } from "drizzle-orm"; // SQL condition helper from drizzle-orm

export async function POST(req) {
    try {
        // Parse the user data from the request body
        const { user } = await req.json();

        // Ensure user data is valid
        if (!user?.primaryEmailAddress?.emailAddress) {
            throw new Error('User email is required.');
        }

        // Use a fallback for name if it's missing
        const userName = user?.fullname?.trim() || 'Anonymous User';
        const userEmail = user.primaryEmailAddress.emailAddress;
        const userImage = user?.imageUrl || null; // Use `null` if the image URL is missing

        // Check if the user already exists in the database
        const userData = await db.select()
            .from(usersTable)
            .where(eq(usersTable.email, userEmail));

        // If the user does not exist in the database
        if (userData?.length <= 0) {
            // Insert the new user into the database
            const result = await db.insert(usersTable)
                .values({
                    name: userName,
                    email: userEmail,
                    image: userImage,
                })
                .returning(usersTable);

            // Return the inserted user data as a JSON response
            return NextResponse.json(result[0]);
        }

        // If the user already exists, return the existing user data
        return NextResponse.json(userData[0]);

    } catch (error) {
        console.error('Error processing user data:', error.message);

        // Return an error response if any error occurs
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
