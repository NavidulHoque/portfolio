import { projects } from "@/data/projects";
import Heading from "../common/Heading";
import ProjectsWrapper from "./ProjectsWrapper";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <ProjectsWrapper>
      <Heading label="Projects" />
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col gap-y-4">
            <p className="self-start bg-gradient-text bg-clip-text text-transparent text-[23px] font-semibold">
              {project.name}
            </p>

            <span className="text-sm text-blue-600 font-medium">{project.tag}</span>

            <ul className="list-disc ml-5 marker:text-pink-500 text-blue-500 space-y-2">
              {project.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-blue-500 hover:text-pink-500 transition"
            >
              View Code <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>
    </ProjectsWrapper>
  );
}
