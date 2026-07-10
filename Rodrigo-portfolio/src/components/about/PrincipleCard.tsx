import type { Principle } from "../../data/about";

interface PrincipleCardProps {
  principle: Principle;
}

export default function PrincipleCard({
  principle,
}: PrincipleCardProps) {
  return (
    <article
      className="
        group
        rounded-2xl
        border
        border-border
        bg-background
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-accent
      "
    >
      <span
        className="
          mb-6
          block
          text-3xl
          transition-transform
          duration-300
          group-hover:-translate-y-1
        "
      >
        {principle.icon}
      </span>

      <h3 className="text-xl font-semibold text-text-h">
        {principle.title}
      </h3>

      <p className="mt-3 leading-relaxed text-text">
        {principle.description}
      </p>
    </article>
  );
}