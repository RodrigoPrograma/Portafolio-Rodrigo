import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <article
      className="
        grid
        gap-8
        overflow-hidden
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        md:grid-cols-2
      "
    >
      <div
        className="
          relative
          aspect-video
          overflow-hidden
          md:aspect-auto
        "
      >
        <img
          src={experience.image}
          alt={experience.title}
          className="
            h-full
            w-full
            object-cover
          "
        />
      </div>

      <div
        className="
          flex
          flex-col
          justify-center
          gap-6
          p-8
        "
      >
        <div>
          <span
            className="
              text-sm
              uppercase
              tracking-[0.2em]
              text-[var(--accent)]
            "
          >
            {experience.category}
          </span>

          <p
            className="
              mt-2
              text-sm
              text-[var(--text-secondary)]
            "
          >
            {experience.period}
          </p>
        </div>

        <h3
          className="
            text-3xl
            font-semibold
            text-[var(--text-primary)]
          "
        >
          {experience.title}
        </h3>

        <p
          className="
            leading-relaxed
            text-[var(--text-secondary)]
          "
        >
          {experience.description}
        </p>

        <ul
          className="
            flex
            flex-wrap
            gap-2
          "
        >
          {experience.technologies.map((technology) => (
            <li
              key={technology}
              className="
                rounded-full
                border
                border-[var(--border)]
                px-3
                py-1
                text-sm
                text-[var(--text-secondary)]
              "
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}