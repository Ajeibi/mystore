import React from 'react'
import ProductList from './products/page'
import Filters from '@/components/filters/page'

const Home = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold my-6">Product Catalogue</h2>
            <section className='md:hidden'>
                <Filters />
            </section>
            <ProductList />
        </div>
    )
}

export default Home
