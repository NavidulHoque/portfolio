"use client"

import Input from "./Input"
import Form from 'next/form'
import Button from "./Button"
import TextArea from "./TextArea"
import { useRef} from "react"
import { errorToast } from "@/lib/utils"
import { successToast } from '@/lib/utils';

export default function FormComp() {

    const formRef = useRef<HTMLFormElement | null>(null)

    async function formAction(formData: FormData) {

        if (formData.get("name") && formData.get("email") && formData.get("message")) {
    
            try {
    
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
                        name: formData.get("name"),
                        email: formData.get("email"),
                        message: formData.get("message"),
                    }),
                });
    
                const result = await response.json()
    
                if (result.success) {
                    successToast(result.message);
                }
            }
    
            catch {
                errorToast("Something went wrong, please try again");
            }
        }
    
        else {
            errorToast("Please fill up the form");
        }
    }


    return (
        <Form
            action={formAction}
            className="md:w-[50%] flex flex-col gap-y-7"
            ref={formRef}
        >

            <Input
                name="name"
                label="Your Name:"
                type="text"
                placeholder="Enter your name"
            />

            <Input
                name="email"
                label="Your Email:"
                type="email"
                placeholder="Enter your email"
            />

            <div className="space-y-3">

                <label htmlFor="message">Write your message here:</label>

                <TextArea />

            </div>

            <Button />

        </Form>
    )
}
