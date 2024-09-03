import React from 'react'
import Filters from './filters/page'

const Sidebar = () => {
    return (
        <div className="hidden md:block py-5 pl-5 bg-[#f1f0f0]">
            <Filters />
        </div>
    )
}

export default Sidebar
