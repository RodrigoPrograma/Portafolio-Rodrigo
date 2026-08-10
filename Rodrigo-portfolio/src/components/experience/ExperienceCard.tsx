import { AnimatePresence, motion } from "motion/react";
import type { Experience } from "@/types/experience";
import { fade } from "@/motion";

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
        border-(--border)
        bg-(--surface)
        md:grid-cols-2
        transition-opacity
        duration-300
        ease-in-out
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
                <AnimatePresence mode="wait">
  <motion.img
    key={experience.id}
    src={experience.image}
    alt={`Imagen de ${experience.title}`}
    variants={fade}
    initial="hidden"
    animate="visible"
    exit="exit"
    transition={{
    duration: 0.5,
    ease: "easeOut",
}}
    className="
      h-full
      w-full
      object-cover
    "
  />
</AnimatePresence>
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
              text-(--accent)
            "
                    >
                        {experience.category}
                    </span>

                    <p
                        className="
              mt-2
              text-sm
              text-(--text-secondary)
            "
                    >
                        {experience.period}
                    </p>
                </div>

                <h3
                    className="
            text-3xl
            font-semibold
            text-(--text-primary)
          "
                >
                    {experience.title}
                </h3>

                <p
                    className="
            leading-relaxed
            text-(--text-secondary)
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
                border-(--border)
                px-3
                py-1
                text-sm
                text-(--text-secondary)
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