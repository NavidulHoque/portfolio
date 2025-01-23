"use client"

import useRefCustom from "@/hooks/useRefCustom"

export default function AboutWrapper({ children }: Readonly<{ children: React.ReactNode }>) {

    const { aboutRef } = useRefCustom()

    return (
        <section ref={aboutRef} className="flex-column gap-y-5 pt-8">
            {children}
        </section>
    )
}
