import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section
            id="projects"
            className="
                container
                mx-auto
                px-6
                py-24
            "
        >
            <header
                className="
                    mb-15
                    text-center
                    justify-content-center
                    flex
                    flex-col
                    gap-4
                    items-center
                "
            >
                <h2
                    className="
                        text-3xl
                        font-bold
                        mb-7
                    "
                >
                    Proyectos
                </h2>

                <p
                    className="
                        mx-auto
                        mt-4
                        max-w-2xl
                        text-muted-foreground
                    "
                >
                    A selection of projects focused on performance,
                    accessibility and clean architecture.
                </p>
            </header>

            <div
                className="
                    grid
                    gap-8
                    md:grid-cols-2
                "
            >
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
}