"use client"

export default function Button({ label, extraStyle }) {
    return (
        <button
            className={`text-[18px] py-[20px] w-[180px] rounded-full cursor-pointer hover:scale-105 transition-all duration-500 ${extraStyle}`}
            onClick={() => console.log("")}
        >
            {label}
        </button>
    )
}
