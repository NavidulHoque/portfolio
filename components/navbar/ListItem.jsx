"use client"

import { useState } from "react"
import ShowTheme from "./ShowTheme"

export default function ListItem({ item }) {
  const [isHovered, setIsHovered] = useState(false)

  function handleRedirect(ref) {
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }

  return (
    <li
      className="text-[20px] cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleRedirect(item.ref)}
    >
      <span className="relative z-10">{item.label}</span>

      {isHovered && (
        <ShowTheme />
      )}

    </li>
  )
}
