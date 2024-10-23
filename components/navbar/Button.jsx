"use client"

export default function Button({contactRef, scale}) {

    function handleRedirect() {
        setTimeout(() => {
            contactRef.current.scrollIntoView({ behavior: 'smooth' })
        }, 0)
    }

    return (
        <button
            className={`min-[900px]:inline-block hidden bg-gradient-bg text-[18px] py-[15px] px-[20px] rounded-full cursor-pointer ${scale}`}
            onClick={() => handleRedirect()}
        >
            Connect With Me
        </button>
    )
}
