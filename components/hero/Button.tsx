"use client"

export default function Button() {

    const downloadResume = () => {
        window.open("/resume/resume.pdf", "_blank")
    }

    return (
        <button
            className={`flex justify-center items-center gap-x-2 text-[#b415ff] text-[20px] py-[20px] px-[50px] rounded-full border-[2px] border-[#b415ff] cursor-pointer hover-scale`}
            onClick={downloadResume}
        >
            My Resume
        </button>
    )
}
