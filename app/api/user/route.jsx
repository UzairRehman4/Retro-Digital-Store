import { NextResponse } from "next/server"
import { db } from "@/configs/db"; // Database connection configuration
import { usersTable } from "@/configs/schema"; // Schema definition for the users table
import { eq } from "drizzle-orm"; // SQL condition helper from drizzle-orm

export async function POST(req) {
    // Parse the user data from the request body
    const { user } = await req.json();

    // Check if the user already exists in the database
    const userData = await db.select()
        .from(usersTable)
        .where(eq(usersTable.email, user?.primaryEmailAddress.emailAddress));

    // If the user does not exist in the database
    if (userData?.length <= 0) {
        // Insert the new user into the database
        const result = await db.insert(usersTable)
            .values({
                name: user?.fullname,
                email: user?.primaryEmailAddress.emailAddress,
                image: user?.imageUrl
            })
            .returning(usersTable);

        // Return the inserted user data as a JSON response
        return NextResponse.json(result[0]);
    }

    // If the user already exists, return the existing user data
    return NextResponse.json(userData[0]);
}
