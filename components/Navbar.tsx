'use client';

import React from "react";
import { Plus, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useSheetContext } from "@/context/SheetContext";

const Navbar = () => {
    const { setIsSheetOpen } = useSheetContext();

    return (
        <nav className="flex items-center justify-between lg:px-20 px-3 lg:py-5 py-3 bg-[#f1f0f0]">
            <div className="text-xl font-great-vibes mr-3">MyStore</div>

            <div className="flex flex-1 justify-center mr-3">
                <div className="relative w-full max-w-md">
                    <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                    />
                    <Input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none bg-gray-100"
                    />
                </div>
            </div>
            <Button
                className="p-2 rounded-xl bg-black hover:bg-black text-white gap-3 border-none hidden md:flex items-center"
                onClick={() => setIsSheetOpen(true)}
            >
                <Plus size={20} className="text-white" />
                <p className="pr-2">Add Products</p>
            </Button>

            <Button
                className="p-2 rounded-full md:hidden"
                onClick={() => setIsSheetOpen(true)}
            >
                <Plus size={20} />
            </Button>
        </nav>
    );
};

export default Navbar;