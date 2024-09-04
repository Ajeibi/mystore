import { Loader2 } from 'lucide-react';
import React, { Suspense, lazy } from 'react';

const ProductDetailsPage = lazy(() => import('@/app/(home)/details/page'));

const DetailsPage = () => {
    return (
        <Suspense fallback={<Loader2 className="animate-spin mx-auto mt-4" size={32} />}>
            <ProductDetailsPage />
        </Suspense>
    );
};

export default DetailsPage;
