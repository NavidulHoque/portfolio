"use client"

import useWindow from "@/hooks/useWindow";
import { FaBarsStaggered } from "react-icons/fa6";

export default function Bar() {

  const {setIsSidebarOpen} = useWindow()
  
  return (
    <FaBarsStaggered 
      onClick={() => setIsSidebarOpen(true)}
      className="size-[30px] cursor-pointer" 
    />
  )
}
