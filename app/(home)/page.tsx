import React from 'react'
import ProductList from './products/page'

const Home = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mt-6">Product Catalogue</h2>
            <ProductList />
        </div>
    )
}

export default Home
