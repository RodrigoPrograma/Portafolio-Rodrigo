import type { Experience } from "@/types/experience";

interface ExperienceRoadmapProps {
    experiences: Experience[];
    selectedId: string;
    onSelect: (experience: Experience) => void;
}

export default function ExperienceRoadmap({
    experiences,
    selectedId,
    onSelect,
}: ExperienceRoadmapProps) {
    const activeIndex = experiences.findIndex(
  ({ id }) => id === selectedId
);

const progress =
  (activeIndex / (experiences.length +1 )) * 100;
    
    return (
        <nav
            aria-label="Experiencia profesional"
            className="
    relative
    w-full
    overflow-x-auto
    pb-4
    "
        >
            <div
                className="
                z-index-0
        absolute
        left-6
        right-6
        top-6
        h-0.5
        bg-(--border)
    "
            />
            <div
                className="
                z-index-1
        absolute
        left-6
        right-6
        top-6
        h-0.5
        bg-(--accent)
    transition-all
    duration-500
    ease-out
    "
    style={{
    width: `calc(${progress}% + 5rem)`,
  }}
            />

            <ol
                className="
        z-1
        relative
      flex
      min-w-max
      items-start
      gap-8
      justify-center
    "
            >
                {experiences.map((experience) => {
                    const isActive = experience.id === selectedId;

                    return (
                        <li
                            key={experience.id}
                            className="
                flex
                flex-col
                items-center
                text-center
                gap-3
                "
                        >
                            <button
                                type="button"
                                onClick={() => onSelect(experience)}
                                aria-current={isActive ? "step" : undefined}
                                className="
                                    group
                                    flex
                                    flex-col
                                    items-center
                                    gap-3
                                "
                            >
                            <span
                                className={`
                                    flex
                                    h-13
                                    w-13
                                    items-center
                                    justify-center
                                    rounded-full
                                    border-2
                                    text-sm
                                    z-10
                                        bg-(--background)
                                            font-medium
                                            transition-colors
                                            ${isActive
                                                                    ? `
                                                    border-(--accent)
                                                    text-(--accent)
                                                `
                                                                    : `
                                                    border-(--border)
                                                    text-(--text-secondary)
                                                    group-hover:text-(--text-primary)
                                                `
                                                                }
                                        `}
                                >
                                    {experience.id}
                                </span>

                                <span
                                    className={`
                    max-w-24
                    text-center
                    text-sm
                    transition-colors
                    ${isActive
                                            ? "text-(--text-text)"
                                            : "text-(--text-secondary)"
                                        }
                    `}
                                >
                                    {experience.title}
                                </span>

                                <span
                                    className={`
                    text-xs
                    text-(--text-secondary)
                    ${isActive
                                            ? "text-(--text-accent)"
                                            : "text-(--text-accent)"
                                        }
                    
                    `}
                                >
                                    {experience.period}
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}