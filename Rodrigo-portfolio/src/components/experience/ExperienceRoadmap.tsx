import type { Experience } from "@/types/experience";
import { useEffect, useRef, useState } from "react";

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
  const roadmapRef = useRef<HTMLElement>(null);
  const nodeRefs = useRef<(HTMLLIElement | null)[]>([]);

  const activeIndex = experiences.findIndex(
    ({ id }) => id === selectedId
  );

  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const roadmap = roadmapRef.current;
    const activeNode = nodeRefs.current[activeIndex];

    if (!roadmap || !activeNode) return;

    const roadmapRect = roadmap.getBoundingClientRect();
    const nodeRect = activeNode.getBoundingClientRect();

    const nodeCenter =
      nodeRect.left +
      nodeRect.width / 2 -
      roadmapRect.left +
      roadmap.scrollLeft;

    setProgressWidth(nodeCenter);
  }, [activeIndex, experiences.length]);

  const handleSelect = (experience: Experience, index: number) => {
    onSelect(experience);

    const roadmap = roadmapRef.current;
    const node = nodeRefs.current[index];

    if (!roadmap || !node) return;

    const hasHorizontalScroll =
      roadmap.scrollWidth > roadmap.clientWidth;

    if (!hasHorizontalScroll) return;

    const roadmapRect = roadmap.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();

    const nodeCenter =
      nodeRect.left +
      nodeRect.width / 2 -
      roadmapRect.left +
      roadmap.scrollLeft;

    const targetScroll =
      nodeCenter - roadmap.clientWidth / 2;

    roadmap.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

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
    >
      <ol
        className="
          relative
          flex
          min-w-max
          items-start
          justify-start
          gap-8
          px-6
          md:justify-center
        "
      >
        {/* Línea de conexión */}
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

        {/* Línea de progreso */}
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
            width: `${Math.max(progressWidth - 24, 0)}px`,
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
                gap-3
                text-center
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
                    z-10
                    flex
                    h-13
                    w-13
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    bg-(--background)
                    text-sm
                    font-medium
                    transition-colors
                    ${
                      isActive
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
                    ${
                      isActive
                        ? "text-(--text-primary)"
                        : "text-(--text-secondary)"
                    }
                  `}
                >
                  {experience.title}
                </span>

                <span
                  className="
                    text-xs
                    text-(--text-accent)
                  "
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