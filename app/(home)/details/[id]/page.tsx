import { Loader2 } from 'lucide-react';
import React, { Suspense, lazy } from 'react';

const ProductDetails = lazy(() => import('@/app/(home)/products/page'));

const DetailsPage = () => {
    return (
        <Suspense fallback={<Loader2 />}>
            <ProductDetails />
        </Suspense>
    );
};

export default DetailsPage;
