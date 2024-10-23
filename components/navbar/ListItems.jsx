"use client"

import { useState } from "react"
import ShowTheme from "./ShowTheme"

export default function ListItems({label}) {
    const [isHovered, setIsHovered] = useState(false)

    return (
      <li
        className="text-[20px] cursor-pointer relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="relative z-10">{label}</span>
  
        {isHovered && (
          <ShowTheme />
        )}
  
      </li>
    )
}
