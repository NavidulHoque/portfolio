"use client"

import { WindowContext, WindowContextType } from "@/context/WindowContext"
import { useContext } from "react"

export default function useSidebar(): WindowContextType {
  return useContext(WindowContext)
}