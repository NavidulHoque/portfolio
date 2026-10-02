"use client"

import useRefCustom from "@/hooks/useRefCustom"

export default function ApproachWrapper({ children }: Readonly<{ children: React.ReactNode }>) {

    const { approachRef } = useRefCustom()

    return (
        <section ref={approachRef} className="flex-column gap-y-16 pt-8">
            {children}
        </section>
    )
}
