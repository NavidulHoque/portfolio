"use client"

import { createContext, RefObject, useRef } from "react";

export interface Item {
    label: string;
    ref: React.RefObject<HTMLDivElement | null>;
}

export interface RefContextType {
    aboutRef: RefObject<HTMLDivElement | null>;
    experienceRef: RefObject<HTMLDivElement | null>;
    projectsRef: RefObject<HTMLDivElement | null>;
    contactRef: RefObject<HTMLDivElement | null>;
    listItems: Item[];
}



export const RefContext = createContext<RefContextType>({} as RefContextType)

export default function RefProvider({ children }: { children: React.ReactNode }) {

    const aboutRef = useRef<HTMLDivElement | null>(null)

    const experienceRef = useRef<HTMLDivElement | null>(null)

    const projectsRef = useRef<HTMLDivElement | null>(null)

    const contactRef = useRef<HTMLDivElement | null>(null)

    const listItems: Item[] = [
        {
            label: "About Me",
            ref: aboutRef
        },
        {
            label: "Projects",
            ref: projectsRef
        },
        {
            label: "Experience",
            ref: experienceRef
        },
        {
            label: "Contact",
            ref: contactRef
        }
    ]

    return (
        <RefContext.Provider value={{ aboutRef, experienceRef, projectsRef, contactRef, listItems }}>
            {children}
        </RefContext.Provider>
    )
}