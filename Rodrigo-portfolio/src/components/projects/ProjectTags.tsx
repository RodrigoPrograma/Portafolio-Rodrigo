import type { Project } from "@/types/project";

interface ProjectTagsProps {
    technologies: Project["technologies"];
}

export default function ProjectTags({
    technologies,
}: ProjectTagsProps) {
    return (
        <div
            className="
                flex
                flex-wrap
                gap-2
            "
        >
            {technologies.map((technology) => (
                <span
                    key={technology}
                    className="
                        rounded-md
                        border
                        px-2
                        py-1
                        text-xs
                    "
                >
                    {technology}
                </span>
            ))}
        </div>
    );
}