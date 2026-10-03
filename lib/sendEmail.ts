type SendEmailResult = {
    success: boolean
    message: string
}

// Runs in the browser on purpose: Web3Forms only accepts submissions made
// from the client on its free plan, so calling it from a server action
// fails once the site is hosted. NEXT_PUBLIC_* values are inlined at build
// time, so the variable must be set in Netlify before the site is built.
export async function sendEmail(name: string, email: string, message: string): Promise<SendEmailResult> {

    const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY

    if (!accessKey) {
        console.error("NEXT_PUBLIC_ACCESS_KEY is not set")
        return { success: false, message: "The contact form is not available right now." }
    }

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: accessKey,
            name: name,
            email: email,
            message: message,
        }),
    })

    let result: { success?: boolean; message?: string } | null = null

    try {
        result = await response.json()
    }

    catch {
        // Non-JSON body (for example an HTML error page); handled below.
    }

    if (response.ok && result?.success) {
        return { success: true, message: "Emailed successfully." }
    }

    return {
        success: false,
        message: result?.message ?? "Failed to send your message. Please try again later.",
    }
}
