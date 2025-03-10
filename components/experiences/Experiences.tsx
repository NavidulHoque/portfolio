import { experiences } from "@/data/experience";
import Heading from "../common/Heading";
import ExperiencesWrapper from "./ExperiencesWrapper";

export default function Experiences() {

  return (
    <ExperiencesWrapper>

      <Heading label="Experience" />

      <div className="grid sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] justify-center gap-8">

        {experiences.map(experience => (
          <div
            key={experience.company}
            className={`bg-[#232329] hover:bg-gradient-hover flex-column gap-y-2 p-8 rounded-lg hover-scale cursor-pointer`}
          >

            <span className="self-start text-gradient">{experience.duration}</span>

            <h3>{experience.company}</h3>

            <span>{experience.position}</span>

            <ul className="list-disc list-inside text-blue-500 mt-1 pt-5 marker:text-pink-500 space-y-3">

              {experience.descriptions.map(description => (
                <li key={description}>{description}</li>
              ))}

            </ul>

          </div>

        ))}
        
      </div>

    </ExperiencesWrapper>
  )
}



