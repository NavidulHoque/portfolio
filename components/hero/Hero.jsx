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

      <h1 className="text-[65px] text-center leading-[70px] font-semibold">

        <span className="bg-gradient-text bg-clip-text text-transparent">I'm Md.Navidul Hoque</span>, MERN Stack developer from bangladesh.
        
      </h1>

      <p>I am a fresh graduate from Millitary Institute of Science and Technology</p>

      <div className="space-x-4">

        <Button 
          label="Connect With Me"
          extraStyle="bg-gradient-bg" 
        />

        <Button 
          label="My Resume"
          extraStyle="border-[2px] border-[#b415ff]" 
        />

      </div>

    </div>
  )
}

