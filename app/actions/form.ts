"use server"

export async function sendEmail(name: string, email: string, message: string) {

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
            name: name,
            email: email,
            message: message,
        }),
    });

    const result = await response.json()

    return result
}