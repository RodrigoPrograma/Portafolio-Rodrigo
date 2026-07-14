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
  return (
    <nav
      aria-label="Experiencia profesional"
      className="
        w-full
        overflow-x-auto
        pb-4
      "
    >
      <ol
        className="
          flex
          min-w-max
          items-start
          gap-8
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
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    text-sm
                    font-medium
                    transition-colors
                    ${
                      isActive
                        ? `
                          border-[var(--accent)]
                          text-[var(--accent)]
                        `
                        : `
                          border-[var(--border)]
                          text-[var(--text-secondary)]
                          group-hover:text-[var(--text-primary)]
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
                        ? "text-[var(--text-primary)]"
                        : "text-[var(--text-secondary)]"
                    }
                  `}
                >
                  {experience.title}
                </span>

                <span
                  className="
                    text-xs
                    text-[var(--text-secondary)]
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