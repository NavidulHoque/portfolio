import BigTheme from "@/icons/BigTheme";

export default function Heading({label}) {
  return (
    <div className="relative text-center self-center">

        <h1 className="text-[60px] leading-[50px] font-semibold relative z-10">{label}</h1>

        <div className="absolute top-[10px] right-[-40px] z-0">

          <BigTheme width="160" height="50" />

        </div>

      </div>
  )
}
