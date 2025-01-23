"use client"

import useRefCustom from "@/hooks/useRefCustom"

export default function ProjectsWrapper({ children }: Readonly<{ children: React.ReactNode }>) {

    const { projectsRef } = useRefCustom()

    return (
        <section ref={projectsRef} className="flex-column gap-y-16 pt-8">
            {children}
        </section>
    )
}
