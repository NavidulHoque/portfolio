import { projects } from "@/data/projects";
import Heading from "./common/Heading";
import Image from "next/image";

export default function MyProjects() {
  return (
    <div className="flex flex-col gap-y-16 mt-8">

      <Heading label="My Projects" />

      <div className="grid grid-cols-3 gap-6">

        {projects.map((project, index) => (

          <a
            href={project.link}
            target="_blank"
            key={index}
            className="w-full cursor-pointer flex flex-col gap-y-3 hover:scale-[1.05] transition-all duration-300"
          >

            <Image
              src={project.photo}
              alt="photo"
              quality={100}
              className="w-full rounded-lg object-cover object-center"
            />

            <p className="self-start bg-gradient-text bg-clip-text text-transparent">{project.name}</p>

          </a>
        ))}

      </div>
      
    </div>
  )
}
