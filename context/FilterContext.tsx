'use client';

import React, { createContext, SetStateAction, useContext, useState } from 'react';

interface IContextType {
    filter: string;
    setFilter: React.Dispatch<SetStateAction<string>>;
    sort: string;
    setSort: React.Dispatch<SetStateAction<string>>;
}

export const INITIAL_FILTER_DATA = {
    filter: 'all',  // default filter is 'all'
    setFilter: () => { },
    sort: 'latest',  // default sort is 'latest'
    setSort: () => { },
};

const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('latest');

    return (
        <FilterContext.Provider value={{ filter, setFilter, sort, setSort }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => useContext(FilterContext);