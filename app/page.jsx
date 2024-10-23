"use client"

import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Contact from "../components/contact/Contact";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Projects from "../components/Projects";

export default function Home() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null)
  const [windowInnerWidth, setWindowInnerWidth] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const scale = "hover:scale-[1.05] transition-all duration-300"

  const listItems = [
    {
      label: "About Me",
      ref: aboutRef
    },
    {
      label: "Projects",
      ref: projectsRef
    },
    {
      label: "Experience",
      ref: experienceRef
    },
    {
      label: "Contact",
      ref: contactRef
    }
  ]

  useEffect(() => {
    setWindowInnerWidth(window.innerWidth);

    const handleResize = () => {
      setWindowInnerWidth(window.innerWidth)
      setIsSidebarOpen(false)
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);

  }, [])

  return (
    <>
      <ToastContainer />

      {windowInnerWidth < 640 && <Sidebar listItems={listItems} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />}

      <div className="bg-[#161513] min-h-screen text-white">

        <div className="xl:w-[80vw] w-[90vw] mx-auto flex flex-col gap-y-20 text-lg md:text-xl lg:text-2xl py-7">

          <Navbar
            contactRef={contactRef}
            listItems={listItems}
            windowInnerWidth={windowInnerWidth}
            setIsSidebarOpen={setIsSidebarOpen}
            scale={scale}
          />

          <Hero scale={scale} />

          <About 
            aboutRef={aboutRef} 
            scale={scale}
          />

          <Projects 
            projectsRef={projectsRef}
            scale={scale} 
          />

          <Experiences 
            experienceRef={experienceRef}
            scale={scale} 
          />

          <Contact 
            contactRef={contactRef}
            scale={scale} 
          />

          <Footer />

        </div>

      </div>
    </>
  )
}
