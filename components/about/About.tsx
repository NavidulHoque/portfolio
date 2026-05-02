import { SkillSection, wholeSkills } from "@/data/skills";
import Heading from "../common/Heading";
import SkillsContainer from "./SkillsContainer";
import AboutWrapper from "./AboutWrapper";

export default function About() {
  return (
    <AboutWrapper>

      <Heading label="About Me" />

      <p className="my-10">I am a Backend Software Engineer with a strong focus on building scalable, reliable and maintainable systems. I have hands-on experience designing REST APIs, optimizing databases, and implementing secure authentication in production environments. My work also includes type-safe API development, monorepo architectures, and real-time features using modern tools. I continuously aim to improve system performance, code quality, and overall backend architecture.</p>

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

