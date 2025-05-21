import { SkillSection, wholeSkills } from "@/data/skills";
import Heading from "../common/Heading";
import SkillsContainer from "./SkillsContainer";
import AboutWrapper from "./AboutWrapper";

export default function About() {
  return (
    <AboutWrapper>

      <Heading label="About Me" />

      <p className="my-10">I am a Software Engineer with a strong passion for backend development and building reliable, error-free systems. My hands-on experience has deepened my understanding of server-side technologies, including developing robust APIs, managing databases efficiently, and implementing secure authentication for dynamic web applications.</p>

      <div className="flex-column gap-y-10">

        <h1 className="self-start text-gradient text-5xl">Skills: </h1>

        {wholeSkills.map((section: SkillSection) => (
          <SkillsContainer
            key={section.label}
            section={section}
          />
        ))}

      </div>

    </AboutWrapper>
  )
}

