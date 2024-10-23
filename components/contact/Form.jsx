"use client"

import { scale } from "@/data/scale"
import Input from "./Input"
import { Bounce, toast } from "react-toastify"
import { useState } from "react"

export default function Form() {

    const [loading, setLoading] = useState(false)

    const style = "bg-[#32323c] text-[#a0a0a0] w-full py-[18px] px-[20px] rounded-md border-none outline-none"

    async function handleSubmit(e) {

        e.preventDefault()

        if (!loading) {

            try {
                setLoading(true)

                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        access_key: "a5579398-f7aa-4aa1-95ea-d8f91b6c5f56",
                        name: e.target.name.value,
                        email: e.target.email.value,
                        message: e.target.message.value,
                    }),
                });

                const result = await response.json()

                if (result.success) {

                    setLoading(false)

                    toast.success(result.message, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                    })
                }
            } 
            
            catch {
                setLoading(false)

                toast.error("Something went wrong, please try again", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                })
            }
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-[50%] flex flex-col gap-y-7"
        >

            <Input
                name="name"
                label="Your Name:"
                type="text"
                placeholder="Enter your name"
                style={style}
            />

            <Input
                name="email"
                label="Your Email:"
                type="email"
                placeholder="Enter your email"
                style={style}
            />

            <div className="space-y-3">

                <label htmlFor="message">Write your message here:</label>

                <textarea
                    rows="8"
                    placeholder="Enter your message"
                    className={style}
                    id="message"
                    name="message"
                    style={{ resize: "none" }}
                />

            </div>

            <button
                type="submit"
                className={`bg-gradient-bg w-[40%] rounded-full py-[18px] ${scale}`}
                disabled={loading}
            >
                Submit Now
            </button>

        </form>
    )
}
