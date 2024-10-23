import { projects } from "@/data/projects";
import Heading from "./common/Heading";
import Image from "next/image";

export default function Projects({projectsRef, scale}) {
  return (
    <div ref={projectsRef} className="flex flex-col gap-y-16 pt-8">

      <Heading label="Projects" />

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">

        {projects.map(project => (

          <a
            href={project.link}
            target="_blank"
            key={project.name}
            className={`w-full cursor-pointer flex flex-col gap-y-3 ${scale}`}
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
