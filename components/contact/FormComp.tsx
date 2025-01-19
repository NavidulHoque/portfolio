"use client"

import Input from "./Input"
import Form from 'next/form'
import Button from "./Button"
import TextArea from "./TextArea"
import { useRef } from "react"
import { errorToast } from "@/lib/utils"
import { successToast } from '@/lib/utils';
import { sendEmail } from "@/app/actions/form"

export default function FormComp() {

    const formRef = useRef<HTMLFormElement | null>(null)

    async function formAction(formData: FormData) {

        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const message = formData.get("message") as string

        if (name && email && message) {

            try {

                const result = await sendEmail(name, email, message)

                if (result.success) {
                    successToast(result.message)
                }
            }

            catch (error) {

                if (error instanceof Error) {
                    errorToast(error.message);
                }
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
