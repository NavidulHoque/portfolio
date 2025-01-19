import { backend, database, frontend, languages } from "@/data/skills";
import Heading from "../common/Heading";
import SkillDiv from "./SkillDiv";


export default function About({ aboutRef }: { aboutRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div ref={aboutRef} className="flex flex-col gap-y-5 pt-8">

      <Heading label="About Me" />

      <p className="my-10">I am a MERN Stack Developer who is passionate about making 100% error free dynamic websites. My hands-on experience has strengthened my understanding of web development, particularly in building responsive and dynamic user interfaces. On the backend, I focus on developing robust APIs, handling databases efficiently and implementing secure authentication.</p>

      <div className="flex-column gap-y-10">

        <h1 className="self-start text-gradient text-5xl">Skills: </h1>

        <SkillDiv 
          label="Languages:"
          skills={languages} 
        />

        <SkillDiv 
          label="Frontend:"
          skills={frontend} 
        />

        <SkillDiv 
          label="Backend:"
          skills={backend} 
        />

        <SkillDiv 
          label="Database:"
          skills={database} 
        />

      </div>

    </div>
  )
}

