import type { Project } from "@/types/project";
import ProjectTags from "./ProjectTags";
import ProjectLinks from "./ProjectLinks";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({
    project,
}: ProjectCardProps) {
    return (
        <article
            className="
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-xl
                border
                bg-card
                shadow-sm
            "
        >
            <figure className="aspect-video overflow-hidden">
                <img
                    src={project.image}
                    alt={project.alt}
                />
            </figure>

            <div
                className="
                    flex
                    flex-1
                    flex-col
                    gap-6
                    p-6
                "
            >
                <header>
                    <h3 className="
                    pb-3
                    pt-1
                    "
                    >
                        {project.title}
                        <br />
                        {project.status}
                    </h3>

                    <p>
                        {project.description}
                    </p>
                </header>

                <ProjectTags
                    technologies={project.technologies}
                />

                <ProjectLinks
                    repositoryUrl={project.repositoryUrl}
                    liveUrl={project.liveUrl}
                />
            </div>
        </article>
    );
}