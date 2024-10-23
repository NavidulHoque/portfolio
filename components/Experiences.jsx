import { experiences } from "@/data/experience";
import Heading from "./common/Heading";
import { scale } from "@/data/scale";

export default function Experiences({experienceRef}) {
  return (
    <div ref={experienceRef} className="flex flex-col gap-y-16 pt-8">

      <Heading label="Experience" />

      <div className="grid sm:grid-cols-2 gap-8">

        {experiences.map(experience => (
          <div
            key={experience.company}
            className={`bg-[#232329] hover:bg-gradient-hover flex flex-col gap-y-2 p-5 rounded-lg ${scale} cursor-pointer`}
          >

            <span className="self-start bg-gradient-text bg-clip-text text-transparent text-[22px]">{experience.duration}</span>
            <h3>{experience.company}</h3>

            <ul className="list-disc list-inside mt-4 marker:text-pink-500 space-y-3">

              <li>{experience.position}</li>

              <li>{experience.role}</li>

            </ul>

            <p className="text-blue-500 pt-5">{experience.description}</p>

          </div>

        ))}
        
      </div>

    </div>
  )
}



