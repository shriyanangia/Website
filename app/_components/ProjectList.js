import { getProjects } from "../_lib/data-service"
import ProjectCard from "./ProjectCard";

async function ProjectList()
{

    const projects = await getProjects();

    if (!projects.length) return null;

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>

    )
}

export default ProjectList