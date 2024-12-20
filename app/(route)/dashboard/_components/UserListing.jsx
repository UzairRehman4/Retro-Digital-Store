"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import React, { useState } from 'react'

const UserListing = () => {
    const [listing, setListing] = useState([]);
    return (
        <div className='mt-5'>
            <h2 className='font-bold text-xl flex justify-between items-center'>Listing
                <Link href={'/add-product'}> <Button>+ Add New Product</Button></Link>
            </h2>

            <div>
                {listing?.length == 0 && <h2 className='font-medium  mt-10 text-2xl text-center text-gray-300'>No Listing Found</h2>}
            </div>
        </div>
    )
}

export default UserListing