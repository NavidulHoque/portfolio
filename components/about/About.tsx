import { SkillSection, wholeSkills } from "@/data/skills";
import Heading from "../common/Heading";
import SkillsContainer from "./SkillsContainer";
import AboutWrapper from "./AboutWrapper";

export default function About() {
  return (
    <AboutWrapper>

      <Heading label="About Me" />

      <p className="my-10">I am a MERN Stack Developer who is passionate about making 100% error free dynamic websites. My hands-on experience has strengthened my understanding of web development, particularly in building responsive and dynamic user interfaces. On the backend, I focus on developing robust APIs, handling databases efficiently and implementing secure authentication.</p>

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

