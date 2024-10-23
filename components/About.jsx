import { skills } from "@/data/skills";
import Heading from "./common/Heading";
import { scale } from "@/data/scale";

export default function About({ aboutRef }) {
  return (
    <div ref={aboutRef} className="flex flex-col gap-y-5 pt-8">

      <Heading label="About Me" />

      <p className="my-10">I am a MERN Stack Developer who is passionate about making 100% error free dynamic websites. My hands-on experience has strengthened my understanding of web development, particularly in building responsive and dynamic user interfaces. On the backend, I focus on developing robust APIs, handling databases efficiently and implementing secure authentication.</p>

      <div className="flex flex-col gap-y-6">

        <h2 className="self-start bg-gradient-text bg-clip-text text-transparent text-3xl">Skills: </h2>

        {skills.map(skill => (

          <div
            key={skill.name}
            className={`flex lg:flex-row flex-col items-center lg:gap-x-5 gap-y-5 w-full ${scale} cursor-pointer`}
          >

            <span className="self-start lg:basis-[150px] text-2xl">{skill.name}</span>

            <div className="flex items-center gap-x-2 w-full">

              <hr
                className='justify-self-start lg:justify-self-center h-[8px] rounded-full bg-gradient-bg border-none outline-none'
                style={{ width: skill.skill }}
              />

              <span>{skill.skill}</span>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

