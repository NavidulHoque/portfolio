"use client"

import { useState } from "react"
import Theme from "./Theme"
import { Item } from "@/context/RefContext"

export default function ListItem({ item }: {item: Item}) {

  const [isHovered, setIsHovered] = useState(false)

  function handleScroll(ref: React.RefObject<HTMLDivElement | null>) {
    
    setTimeout(() => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
      }
    }, 0)
  }

  return (
    <li
      className="text-[20px] cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleScroll(item.ref)}
    >
      <span className="relative z-10">{item.label}</span>

      {isHovered && (
        <Theme />
      )}

    </li>
  )
}
