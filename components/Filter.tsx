'use client';

import React from 'react';
import { useFilter } from '@/context/FilterContext';

const Filters = () => {
    const { filter, setFilter, sort, setSort } = useFilter();

    const handleFilterChange = (value: string) => setFilter(value);
    const handleSortChange = (value: string) => setSort(value);

    return (
        <div className="mb-10 mr-10 mx-5">
            <div className="mb-5">
                <h6 className="text-xl font-light mb-5 font-great-vibes">Filter By</h6>
                <div className="flex flex-col space-y-3">
                    <label className="flex items-center font-great-vibes">
                        <input
                            type="radio"
                            value="all"
                            checked={filter === 'all'}
                            onChange={() => handleFilterChange('all')}
                            className="mr-5 h-5 w-5"
                        />
                        All Products
                    </label>
                    <label className="flex items-center font-great-vibes">
                        <input
                            type="radio"
                            value="active"
                            checked={filter === 'active'}
                            onChange={() => handleFilterChange('active')}
                            className="mr-5 h-5 w-5"
                        />
                        Active Products
                    </label>
                    <label className="flex items-center font-great-vibes">
                        <input
                            type="radio"
                            value="archived"
                            checked={filter === 'archived'}
                            onChange={() => handleFilterChange('archived')}
                            className="mr-5 h-5 w-5"
                        />
                        Archived Products
                    </label>
                </div>
            </div>

            <hr className="border-gray-300 my-5" />

            <div>
                <h6 className="font-great-vibes text-xl font-light mb-5">Sort By</h6>
                <div className="flex flex-col space-y-5">
                    <label className="flex items-center font-great-vibes">
                        <input
                            type="radio"
                            value="latest"
                            checked={sort === 'latest'}
                            onChange={() => handleSortChange('latest')}
                            className="mr-5 h-5 w-5"
                        />
                        Latest
                    </label>
                    <label className="flex items-center font-great-vibes">
                        <input
                            type="radio"
                            value="oldest"
                            checked={sort === 'oldest'}
                            onChange={() => handleSortChange('oldest')}
                            className="mr-5 h-5 w-5"
                        />
                        Oldest
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Filters;