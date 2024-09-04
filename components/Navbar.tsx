'use client';

import React from "react";
import { Plus, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useSheetContext } from "@/context/SheetContext";
import Link from "next/link";

const Navbar = () => {
    const { setIsSheetOpen } = useSheetContext();

    return (
        <nav className="flex items-center justify-between lg:px-20 px-3 lg:py-5 py-3 bg-[#f1f0f0]">
            <Link href='/' className="text-xl font-great-vibes mr-3">MyStore</Link>

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