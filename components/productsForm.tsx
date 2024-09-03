'use client'

import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Image from 'next/image';
import { Trash2 } from 'lucide-react';

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    description: z.string().min(10, { message: "Description must be at least 10 characters." }),
    image: z.any().optional(),
    price: z.coerce.number().positive({ message: "Price must be a positive number." }),
});

interface ProductFormProps {
    product?: any;
    onAddProduct: (product: any) => void;
    onClose: () => void;
}

export function ProductForm({ product, onAddProduct, onClose }: ProductFormProps) {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: product?.name || "",
            description: product?.description || "",
            image: product?.image || "",
            price: product?.price || "",
        },
    });

    useEffect(() => {
        if (product?.image) {
            setImagePreview(product.image);
        }
    }, [product]);

    const onSubmit = (data: any) => {
        const updatedProduct = {
            ...product,
            ...data,
            image: imagePreview,
            updated: new Date().toISOString(),
        };

        let products = JSON.parse(localStorage.getItem("products") || "[]");
        if (product) {
            products = products.map((p: any) => (p.id === product.id ? updatedProduct : p));
        } else {
            updatedProduct.created = new Date().toISOString();
            products.push(updatedProduct);
        }
        localStorage.setItem("products", JSON.stringify(products));
        onAddProduct(updatedProduct);
        form.reset();
        setImagePreview(null);
        onClose();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageDelete = () => {
        setImagePreview(null);
        form.setValue("image", null);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-great-vibes text-base">Product Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter product name" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-great-vibes text-base">Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Product Description" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-great-vibes text-base">Image</FormLabel>
                            <FormControl>
                                <Input type="file" accept="image/*" onChange={handleImageChange} />
                            </FormControl>
                            <FormMessage />
                            {imagePreview && (
                                <div className="relative mt-2 h-24 w-24">
                                    <Image
                                        src={imagePreview}
                                        alt="Product Preview"
                                        className="object-cover"
                                        height={100}
                                        width={100}
                                    />
                                    <button
                                        type="button"
                                        className="absolute top-0 right-0 bg-white rounded-full p-1"
                                        onClick={handleImageDelete}
                                    >
                                        <Trash2 className="text-red-500 w-4 h-4" />
                                    </button>
                                </div>
                            )}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-great-vibes text-base">Price</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="0.00" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="mt-5 font-great-vibes bg-black text-white rounded-2xl hover:bg-black">
                    {product ? "Update Product" : "Add Product"}
                </Button>
            </form>
        </Form>
    );
}