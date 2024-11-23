import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
const Hero = () => {
    return (
        <div className='bg-green-700 p-10 px-28 lg:px-36'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-20'>
                <div>
                    <h2 className='font-extrabold text-5xl text-white'>Speed Up Your Creative Digital Workflow</h2>
                    <p className='text-gray-200 mt-5 font-bold'>Join a growing family of 43,234 designers, creator and maker around the world</p>
                    <div className='flex gap-5 mt-8'>
                        <Button>Explore</Button>
                        <Button className="bg-red-500 hover:bg-red-600 text-white">Sell</Button>
                    </div>
                </div>

                <div className='flex items-center justify-center'>
                    <Image src={"/image.jpg"} width={360} height={320} className='scale-x-[-1]' />
                </div>
            </div>
        </div>
    )
}

export default Hero