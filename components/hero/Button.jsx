"use client"

import { scale } from "@/data/scale"
import { IoMdDownload } from "react-icons/io";

export default function Button() {
    return (
        <button
            className={`flex justify-center items-center gap-x-2 text-[#b415ff] text-[20px] py-[20px] px-[50px] rounded-full border-[2px] border-[#b415ff] cursor-pointer ${scale}`}
            onClick={() => console.log("")}
        >
            Download Resume <IoMdDownload />
        </button>
    )
}
