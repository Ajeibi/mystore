"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckBoxComponent() {
    return (
        <>
            <h1 className='text-lg font-semibold pb-5'>Filters</h1>
            <div className="flex flex-col md:gap-4 gap-2 font-great-vibes">
                <div className="flex items-center">
                    <Checkbox
                        id="all-products"
                        className="w-6 h-6 border-gray-300"
                    />
                    <Label
                        htmlFor="all-products"
                        className="ml-2  text-sm font-medium"
                    >
                        All Products
                    </Label>
                </div>
                <div className="flex items-center">
                    <Checkbox
                        id="active"
                        className="w-6 h-6 border-gray-300"
                    />
                    <Label
                        htmlFor="active"
                        className="ml-2  text-sm font-medium"
                    >
                        Active Products
                    </Label>
                </div>
                <div className="flex items-center">
                    <Checkbox
                        id="archived"
                        className="w-6 h-6 border-gray-300"
                    />
                    <Label
                        htmlFor="archived"
                        className="ml-2 text-sm font-medium"
                    >
                        Archived Products
                    </Label>
                </div>
            </div>
        </>
    );
}
