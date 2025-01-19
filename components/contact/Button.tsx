"use client"

import { useFormStatus } from "react-dom"

export default function Button() {
    
    const {pending} = useFormStatus()

    return (
        <button
            type="submit"
            className={`md:self-start self-center bg-gradient-bg w-[250px] rounded-full py-[18px] hover-scale ${pending && "opacity-70"}`}
            disabled={pending}
        >
            {pending ? "Submitting..." : "Submit"}
        </button>
    )
}
