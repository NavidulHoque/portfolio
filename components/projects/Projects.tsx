import { projects } from "@/data/projects";
import Heading from "../common/Heading";
import ProjectsWrapper from "./ProjectsWrapper";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <ProjectsWrapper>
      <Heading label="Projects" />
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-14">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col gap-y-4">
            <p className="self-start bg-gradient-text bg-clip-text text-transparent text-[23px] font-semibold">
              {project.name}
            </p>

            <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm font-medium">
              <span className="text-blue-600">{project.tag}</span>
              {project.status && <span className="text-pink-500">{project.status}</span>}
            </div>

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

            <div className="flex flex-wrap gap-x-5">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-2 text-blue-500 hover:text-pink-500 transition"
                >
                  {link.label} <ExternalLink size={16} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ProjectsWrapper>
  );
}
