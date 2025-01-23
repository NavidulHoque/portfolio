import { projects } from "@/data/projects";
import Heading from "../common/Heading";
import Image from "next/image";
import ProjectsWrapper from "./ProjectsWrapper";

export default function Projects() {
  return (
    <ProjectsWrapper>

      <Heading label="Projects" />

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14">

        {projects.map(project => (

          <div key={project.name}>

            <a
              href={project.link}
              target="_blank"

              className='w-full cursor-pointer flex flex-col gap-y-3 hover-scale'
            >

              <Image
                src={project.photo}
                alt="photo"
                quality={100}
                className="w-full rounded-lg object-cover object-center"
              />

              <p className="self-start bg-gradient-text bg-clip-text text-transparent text-[23px]">{project.name}</p>

            </a>

            <ul className="list-disc ml-5 mt-4 marker:text-pink-500 text-blue-500 space-y-5">

              <li>{project.description1}</li>

              <li>{project.description2}</li>

            </ul>

          </div>

        ))}

      </div>

    </ProjectsWrapper>
  )
}
