import { experiences } from "@/data/experience";
import Heading from "./common/Heading";

export default function Experiences() {
  return (
    <div className="flex flex-col gap-y-16 mt-8">

      <Heading label="My Experience" />

      <div className="grid grid-cols-3 gap-8">

        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-[#232329] hover:bg-gradient-hover flex flex-col gap-y-2 p-5 rounded-lg hover:scale-[1.05] transition-all duration-500 cursor-pointer"
          >

            <span className="self-start bg-gradient-text bg-clip-text text-transparent text-[22px]">{experience.duration}</span>
            <h3>{experience.company}</h3>

            <ul className="list-disc list-inside mt-4 marker:text-pink-500">
              <li>{experience.role}</li>
            </ul>

          </div>
        ))}
      </div>

    </div>
  )
}



