/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Profile from "@/public/images/f-71244.jpg"
import Button from "./Button";

export default function Hero() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-5">

      <Image
        src={Profile}
        alt="profile"
        quality={100}
        className="w-[200px] h-[200px] rounded-full object-cover object-top"
      />

      <h1 className="text-[45px] lg:text-[60px] leading-[1.1] font-semibold text-center">

        <span className="bg-gradient-text bg-clip-text text-transparent">I'm Md.Navidul Hoque</span>, MERN Stack developer from Bangladesh.
        
      </h1>

      <p className="text-center">I am a fresh graduate from Millitary Institute of Science and Technology</p>

      <div className="space-x-4">

        <Button />

      </div>

    </div>
  )
}

