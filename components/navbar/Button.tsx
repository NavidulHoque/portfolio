"use client"

export default function Button({contactRef}: {contactRef: React.RefObject<HTMLDivElement | null>}) {

    function handleRedirect() {
        if (contactRef.current) {
            setTimeout(() => {
                if (contactRef.current) {
                    contactRef.current.scrollIntoView({ behavior: 'smooth' })
                }
            }, 0)
        }
    }

    return (
        <button
            className='min-[950px]:inline-block hidden bg-gradient-bg text-[18px] py-[15px] px-[20px] rounded-full cursor-pointer hover-scale'
            onClick={() => handleRedirect()}
        >
            Connect With Me
        </button>
    )
}
