"use client"

import { FaBarsStaggered } from "react-icons/fa6";

export default function Bar({setIsSidebarOpen}) {
  return (
    <FaBarsStaggered 
      onClick={() => setIsSidebarOpen(true)}
      className="w-[30px] h-[30px]" 
    />
  )
}
