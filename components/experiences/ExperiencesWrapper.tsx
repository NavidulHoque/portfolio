"use client"

import useRefCustom from "@/hooks/useRefCustom"

export default function ExperiencesWrapper({ children }: Readonly<{ children: React.ReactNode }>) {

    const { experienceRef } = useRefCustom()
    
    return (
        <section ref={experienceRef} className="flex-column gap-y-16 pt-8">
            {children}
        </section>
    )
}
