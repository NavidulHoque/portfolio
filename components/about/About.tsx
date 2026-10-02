import { SkillSection, wholeSkills } from "@/data/skills";
import Heading from "../common/Heading";
import SkillsContainer from "./SkillsContainer";
import AboutWrapper from "./AboutWrapper";

export default function About() {
  return (
    <AboutWrapper>

      <Heading label="About Me" />

      <p className="my-10">I am a CSE graduate from the Military Institute of Science and Technology (MIST) with a background in backend engineering and a growing focus on data analytics, business intelligence, and technology-driven problem solving. My experience building backend systems has given me a practical understanding of how applications, databases, and business processes work together to generate and organize data. I am now applying that foundation to analytics projects where I explore data, build dashboards, investigate business problems, and experiment with machine learning where it can add value. I am currently pursuing a Post Graduate Diploma in Data Science with Machine Learning and Artificial Intelligence, while continuing to develop my practical skills through projects and hands-on work. My long term goal is to combine technology, analytics, and broader business understanding to solve meaningful operational and business problems and eventually grow toward strategic and leadership oriented roles.</p>

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

