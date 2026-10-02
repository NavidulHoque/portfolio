/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Profile from "@/public/images/f-71244.jpg"
import Button from "./Button";

export default function Hero() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-y-5">

      <Image
        src={Profile}
        alt="profile"
        quality={100}
        className="size-[200px] rounded-full object-cover object-top"
      />

      <h1 className="text-45-semibold lg:text-[60px] text-center">

        <span className="bg-gradient-text bg-clip-text text-transparent">
          I'm Md. Navidul Hoque
        </span>, CSE Graduate focused on Data Analytics & Business Problem Solving.

      </h1>

      <p className="text-center">
        CSE graduate from Military Institute of Science and Technology (MIST) with
        backend engineering experience, developing expertise in data analytics,
        business intelligence, and technology driven problem solving.
      </p>

      <div className="space-x-4">

        <Button />

      </div>

    </section>
  )
}

