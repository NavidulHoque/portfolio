"use client";

import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/About";
import Experiences from "../components/Experiences";
import MyProjects from "../components/MyProjects";
import Contact from "../components/contact/Contact";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null)

  return (
    <>
      <ToastContainer />

      <div className="bg-[#161513] min-h-screen text-white font-outfitRegular">

        <div className="w-[80vw] mx-auto flex flex-col gap-y-20 text-lg md:text-xl lg:text-2xl py-7">

          <Navbar
            aboutRef={aboutRef}
            experienceRef={experienceRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />

          <Hero />

          <About aboutRef={aboutRef} />

          <Experiences experienceRef={experienceRef} />

          <MyProjects projectsRef={projectsRef} />

          <Contact contactRef={contactRef} />

          <Footer />

        </div>

      </div>
    </>
  )
}
