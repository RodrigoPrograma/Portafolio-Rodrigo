import type { Experience } from "@/types/experience";
import { useRef } from "react";
import { useEffect } from "react";

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
    
  const roadmapNodes = useRef<Record<string, HTMLButtonElement | null>>({});

    const activeIndex = experiences.findIndex(
        ({ id }) => id === selectedId
    );
    useEffect(() => {
  const activeNode = roadmapNodes.current[selectedId];

  activeNode?.scrollIntoView({
    inline: "center"
  });
}, [selectedId]);
    const handleSelect = (experience: Experience, index: number) => {
  onSelect(experience);

  const nextNode = nodeRefs.current[index + 1];
  const roadmap = roadmapRef.current;

  if (!nextNode || !roadmap) return;

  const hasHorizontalScroll =
    roadmap.scrollWidth > roadmap.clientWidth;

  if (!hasHorizontalScroll) return;

  const nextNodeLeft = nextNode.offsetLeft;

  roadmap.scrollTo({
    left: nextNodeLeft - roadmap.clientWidth / 2,
    behavior: "smooth",
  });
};
    const roadmapRef = useRef<HTMLElement>(null);
    const nodeRefs = useRef<(HTMLLIElement | null)[]>([]);
    const progress =
        (activeIndex / (experiences.length + 0.5)) * 105;

    return (
        <nav
            ref={roadmapRef}
            aria-label="Experiencia profesional"
            className="
    relative
    w-full
    overflow-x-auto
    pb-4
    scrollbar-none
    [-ms-overflow-style:none]
    [&::-webkit-scrollbar]:hidden
  "
        ><ol
            className="
  relative
  flex
  min-w-max
  items-start
  justify-start
  md:justify-center
  gap-8
  px-6

"
        >
                {/* línea base */}
                <div
                    aria-hidden="true"
                    className="
        absolute
        left-6
        right-6
        top-6
        h-0.5
        bg-(--border)
      "
                />

                {/* progreso */}
                <div
                    aria-hidden="true"
                    className="
        absolute
        left-6
        top-6
        h-0.5
        bg-(--accent)
        transition-[width]
        duration-500
        ease-out
      "
                    style={{
                        width: `calc(${progress}% + 5rem)`,
                    }}
                />


                {experiences.map((experience, index) => {
                    const isActive = experience.id === selectedId;

                    return (
                        <li

                            key={experience.id}
                            ref={(element) => {
                                nodeRefs.current[index] = element;
                            }}
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
                                onClick={() => handleSelect(experience, index)}
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