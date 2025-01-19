import BigTheme from "@/icons/BigTheme";

export default function Heading({ label }: { label: string }) {
  return (
    <div className="relative text-center md:self-center self-start">

      <h1 className="text-[45px] lg:text-[60px] leading-[1.1] font-semibold relative z-10">{label}</h1>

      <div className="absolute top-[10px] right-[-40px] z-0">

        <BigTheme width="160" height="50" />

      </div>

    </div>
  )
}
