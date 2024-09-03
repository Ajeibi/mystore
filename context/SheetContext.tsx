'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type SheetContextType = {
    isSheetOpen: boolean;
    setIsSheetOpen: (isOpen: boolean) => void;
};

const SheetContext = createContext<SheetContextType | undefined>(undefined);

export const SheetProvider = ({ children }: { children: ReactNode }) => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    return (
        <SheetContext.Provider value={{ isSheetOpen, setIsSheetOpen }}>
            {children}
        </SheetContext.Provider>
    );
};

export const useSheetContext = () => {
    const context = useContext(SheetContext);
    if (!context) {
        throw new Error('useSheetContext must be used within a SheetProvider');
    }
    return context;
};
