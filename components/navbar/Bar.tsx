"use client"

import { FaBarsStaggered } from "react-icons/fa6";

export default function Bar({setIsSidebarOpen}: {setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <FaBarsStaggered 
      onClick={() => setIsSidebarOpen(true)}
      className="w-[30px] h-[30px] cursor-pointer" 
    />
  )
}
