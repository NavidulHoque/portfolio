"use client"

export default function TextArea() {
    return (
        <textarea
            rows={8}
            placeholder="Enter your message"
            className="input"
            id="message"
            name="message"
            style={{ resize: "none" }}
        />
    )
}
