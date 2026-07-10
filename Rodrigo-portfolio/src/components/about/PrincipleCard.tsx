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
    border-[var(--border)]
    bg-[var(--surface)]
    p-6
    transition-all
    duration-300
    hover:border-[var(--border-hover)]
    hover:shadow-[var(--shadow-md)]
  "
>
      <span
        className="
          mb-6
          block
          text-3xl
          transition-transform
          duration-300
          group-hover:scale-105
        "
      >
        {principle.icon}
      </span>

      <h3
  className="
    text-xl
    font-semibold
    text-[var(--text-primary)]
  "
>
        {principle.title}
      </h3>

      <p
  className="
    mt-3
    leading-relaxed
    text-[var(--text-secondary)]
  "
>
        {principle.description}
      </p>
    </article>
  );
}