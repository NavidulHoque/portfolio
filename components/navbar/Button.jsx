"use client"

import { scale } from "@/data/scale"

export default function Button({contactRef}) {

    function handleRedirect() {
        setTimeout(() => {
            contactRef.current.scrollIntoView({ behavior: 'smooth' })
        }, 0)
    }

    return (
        <button
            className={`bg-gradient-bg text-[18px] py-[15px] px-[20px] rounded-full cursor-pointer ${scale}`}
            onClick={() => handleRedirect()}
        >
            Connect With Me
        </button>
    )
}
