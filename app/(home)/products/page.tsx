'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProductForm } from '@/components/productsForm';
import { CustomSheet } from '@/components/sheet/Sheet';
import Image from 'next/image';
import { Ellipsis } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSheetContext } from '@/context/SheetContext';
import Link from 'next/link';
import { SkeletonGrid } from '@/components/Skeleton';

type Product = {
    name: string;
    description: string;
    image: string;
    price: number;
    created: string;
    updated: string;
};

const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const { isSheetOpen, setIsSheetOpen } = useSheetContext();

    useEffect(() => {
        setTimeout(() => {
            const storedProducts = JSON.parse(localStorage.getItem("products") || "[]") as Product[];
            setProducts(storedProducts);
            setLoading(false);
        }, 1000);
    }, []);

    const handleAddOrUpdateProduct = (product: Product) => {
        let updatedProducts;

        if (selectedProduct) {
            updatedProducts = products.map((p) => (p.name === selectedProduct.name ? product : p));
        } else {
            updatedProducts = [...products, product];
        }

        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        setIsSheetOpen(false);
        setSelectedProduct(null);
    };

    const handleDeleteProduct = (index: number) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
    };

    const handleEditProduct = (product: Product) => {
        setSelectedProduct(product);
        setIsSheetOpen(true);
    };

    return (
        <div className="py-5">
            {loading ? (
                <SkeletonGrid count={20} />
            ) : (
                <>
                    {products.length > 0 && (
                        <>
                            <div className="grid lg:grid-cols-7 grid-cols-6 gap-2 text-left text-sm font-semibold mb-3">
                                <div className="lg:col-span-3 col-span-2">Name</div>
                                <div className="lg:pl-10">Pricing</div>
                                <div className="lg:pl-10 ">Created</div>
                                <div className="lg:pl-10 pl-2">Updated</div>
                                <div className="text-right">
                                    <span className="block w-[40%] ml-auto">&nbsp;</span>
                                </div>
                            </div>
                            <hr className="border-gray-300 mb-3" />
                        </>
                    )}

                    {products.length === 0 ? (
                        <div className="flex flex-col items-center justify-center lg:h-[20rem] h-[15rem] bg-white border rounded shadow-md mx-auto lg:w-[30rem] w-[22rem]">
                            <h2 className="text-xl font-semibold mb-5">No products in inventory</h2>
                            <p className="text-gray-500 mb-4 text-center">Start adding products to manage your inventory.</p>
                            <Button
                                onClick={() => {
                                    setSelectedProduct(null);
                                    setIsSheetOpen(true);
                                }}
                                className='bg-black text-white rounded-2xl hover:bg-black'>
                                Add Product
                            </Button>
                        </div>
                    ) : (
                        products.map((product, index) => (
                            <React.Fragment key={index}>
                                <div className="grid lg:grid-cols-7 grid-cols-6 gap-2 items-center mb-3">
                                    <div className="lg:col-span-3 col-span-2 flex items-center">
                                        {product.image && (
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                className="rounded hidden sm:block"
                                                width={40}
                                                height={40}
                                            />
                                        )}
                                        <Link href={`/details?productName=${encodeURIComponent(product.name)}`} className="ml-2 text-xs">
                                            {product.name}
                                        </Link>
                                    </div>
                                    <div className='lg:pl-10 pr-5 text-xs'>₦{product.price.toFixed(2)}</div>
                                    <div className='lg:pl-10 pl-5 text-xs'>{formatDate(product.created)}</div>
                                    <div className='lg:pl-10 pl-5 text-xs'>{formatDate(product.updated)}</div>
                                    <div className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost">
                                                    <Ellipsis />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-48 bg-white">
                                                <DropdownMenuItem
                                                    onClick={() => handleEditProduct(product)}
                                                    className='cursor-pointer'>
                                                    Edit Product
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    onClick={() => handleDeleteProduct(index)}
                                                    className='cursor-pointer'>
                                                    <p className='text-red-700'>Delete Product</p>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>

                                <hr className="border-gray-300 mb-3" />
                            </React.Fragment>
                        ))
                    )}
                </>
            )}

            <CustomSheet
                isOpen={isSheetOpen}
                onClose={() => {
                    setIsSheetOpen(false);
                    setSelectedProduct(null);
                }}
                title={selectedProduct ? "Edit Product" : "Add New Product"}
            >
                <ProductForm
                    product={selectedProduct}
                    onAddProduct={handleAddOrUpdateProduct}
                    onClose={() => {
                        setIsSheetOpen(false);
                        setSelectedProduct(null);
                    }}
                />
            </CustomSheet>
        </div>
    );
};

export default ProductList;