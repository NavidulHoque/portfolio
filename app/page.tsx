import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Experiences from "../components/experiences/Experiences";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Projects from "../components/projects/Projects";
import ConditionallyRenderSidebar from "@/components/sidebar/ConditionallyRenderSidebar";
import ContextProvider from "@/components/context/ContextProvider";


export default function Home() {

  return (
    <ContextProvider>

      <ConditionallyRenderSidebar />

      <main className="bg-[#161513] min-h-screen text-white">

        <section className="xl:w-[80vw] w-[90vw] mx-auto flex flex-col gap-y-20 text-lg md:text-xl lg:text-2xl py-7">

          <Navbar />

          <Hero />

          <About />

          <Experiences />

          <Projects />

          <Contact />

          <Footer />

        </section>

      </main>

    </ContextProvider>
  )
}
