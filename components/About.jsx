import { skills } from "@/data/skills";
import Heading from "./common/Heading";

export default function About() {
  return (
    <div className="flex flex-col gap-y-5 mt-8">

      <Heading label="About Me" />

      <p className="my-10">I am a passionate MERN Stack Developer with over 5 months of experience. My hands-on experience has strengthened my understanding of web development, particularly in building responsive and dynamic user interfaces. I also have experience in backend development, working with Node.js and Express to create robust APIs and manage databases effectively.</p>

      <div className="flex flex-col gap-y-6">

        <h2 className="self-start bg-gradient-text bg-clip-text text-transparent text-3xl">Skills: </h2>

        {skills.map((skill, index) => (

          <div 
            key={index}
            className="flex items-center gap-x-5 w-full hover:scale-[1.05] transition-all duration-300 cursor-pointer"
          >

            <span className="w-[15%]">{skill.name}</span>
            <hr 
              className='h-[8px] rounded-full bg-gradient-bg border-none outline-none' 
              style={{width: skill.skill}}
            />
            
          </div>
        ))}

      </div>

    </div>
  )
}

