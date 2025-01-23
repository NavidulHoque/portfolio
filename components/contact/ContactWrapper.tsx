"use client"

import useRefCustom from "@/hooks/useRefCustom"

export default function ContactWrapper({ children }: Readonly<{ children: React.ReactNode }>) {

    const { contactRef } = useRefCustom()
    
    return (
        <section ref={contactRef} className="flex-column gap-y-16 pt-8">
            {children}
        </section>
    )
}
