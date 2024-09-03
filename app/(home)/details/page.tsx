'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useSheetContext } from '@/context/SheetContext';
import { useRouter } from 'next/navigation';

type Product = {
    name: string;
    description: string;
    image: string;
    price: number;
    created: string;
    updated: string;
};

const ProductDetailsPage = () => {
    const searchParams = useSearchParams();
    const productName = searchParams.get('productName');
    const { isSheetOpen, setIsSheetOpen } = useSheetContext();
    const router = useRouter();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products') || '[]') as Product[];
        const foundProduct = storedProducts.find((p) => p.name === productName);
        setProduct(foundProduct || null);
    }, [productName]);

    const handleEditProduct = () => {
        setIsSheetOpen(true);
    };

    const handleDeleteProduct = () => {
        if (!product) return;
        const storedProducts = JSON.parse(localStorage.getItem('products') || '[]') as Product[];
        const updatedProducts = storedProducts.filter((p) => p.name !== product.name);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    if (!product) {
        return <p className="text-center mt-4">Product not found.</p>;
    }

    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mx-8 my-4">
            <div className="md:w-3/5">
                <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-xl font-semibold mb-6">₦{product.price.toFixed(2)}</p>
                <div className="flex gap-4">
                    <Button onClick={handleEditProduct} className="bg-black hover:bg-black text-white rounded-xl">
                        Edit Product
                    </Button>
                    <Button onClick={handleDeleteProduct} className="bg-red-600 hover:bg-red-600 rounded-xl text-white">
                        Delete Product
                    </Button>
                </div>
            </div>
            <div className="md:w-2/5 mt-4 md:mt-0 flex justify-center">
                {product.image && (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="rounded w-full max-w-sm"
                    />
                )}
            </div>
        </div>
    );
};

export default ProductDetailsPage;