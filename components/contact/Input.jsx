export default function Input({ name, label, type, placeholder, style  }) {

    return (
        <div className="space-y-3">

            <label htmlFor={name}>{label}</label>

            <input
                type={type}
                placeholder={placeholder}
                className={style}
                id={name}
                name={name}
            />

        </div>
    )
}
