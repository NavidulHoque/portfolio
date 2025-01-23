"use client"

import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

export interface WindowContextType {
    windowInnerWidth: number;
    isSidebarOpen: boolean;
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export const WindowContext = createContext<WindowContextType>({} as WindowContextType)

export default function WindowProvider({ children }: { children: React.ReactNode }) {

    const [windowInnerWidth, setWindowInnerWidth] = useState<number>(0)

    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

    useEffect(() => {
        setWindowInnerWidth(window.innerWidth);

        const handleResize = () => {
            setWindowInnerWidth(window.innerWidth)
            setIsSidebarOpen(false)
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, [])

    return (
        <WindowContext.Provider value={{ windowInnerWidth, isSidebarOpen, setIsSidebarOpen }}>
            {children}
        </WindowContext.Provider>
    )
}