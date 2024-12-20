import { Input } from '@/components/ui/input'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'

const AddProduct = () => {
    const categories = ["Source Code", "Template", "UI/UX Design", "Logo Design", "Banner Design", "Icon Design", "Thumbnail Design", "Illustration", "3D Design", "Other"]
    return (
        <div>
            <h2 className='text-3xl font-bold '>Add New Product</h2>
            <p>Start Selling Your Product</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div>

                </div>
                <div className='flex flex-col gap-5'>
                    <div>
                        <h2>Product Title</h2>
                        <Input name='title' placeholder='Ex. UI/UX Design' />
                    </div>
                    <div>
                        <h2>Price</h2>
                        <Input type='number' name='price' placeholder='Ex. $34' />
                    </div>
                    <div>
                        <h2>Category</h2>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((category, index) => (
                                    <SelectItem value={category}>{category}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <h2>Description</h2>
                        <Textarea name='description' placeholder={"Add a description for your product"} />
                    </div>
                </div>
            </div>
        </div>)
}

export default AddProduct