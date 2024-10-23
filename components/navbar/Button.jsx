"use client"

export default function Button() {
    return (
        <button 
            className="bg-gradient-bg text-[18px] py-[15px] px-[20px] rounded-full cursor-pointer hover:scale-105 transition-all duration-500"
            onClick={() => console.log("ujala")}
        >
            Connect With Me
        </button>
    )
}
