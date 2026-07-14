import type { Principle } from "../../data/about";

interface PrincipleCardProps {
    principle: Principle;
}

export default function PrincipleCard({
    principle,
}: PrincipleCardProps) {
    const Icon = principle.icon;

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
        hover:shadow-[var(--shadow-accent)]
        "
        >

            <div
                className="
                mb-6
                text-[var(--accent)]
                transition-transform
                duration-300
                group-hover:scale-103
                "
            >
                <Icon size={24} />
            </div>

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