"use client"

interface Prop {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}

export default function Input({ name, label, type, placeholder }: Prop) {

    return (
        <div className="space-y-3">

            <label htmlFor={name}>{label}</label>

            <input
                type={type}
                placeholder={placeholder}
                className="input"
                id={name}
                name={name}
            />

        </div>
    )
}
