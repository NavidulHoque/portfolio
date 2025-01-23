"use client"

import Sidebar from "@/components/sidebar/Sidebar";
import useWindow from "@/hooks/useWindow";

export default function ConditionallyRenderSidebar() {

    const {windowInnerWidth} = useWindow()

    return (
        windowInnerWidth < 640 && (

            <Sidebar />
        )
    )
}
