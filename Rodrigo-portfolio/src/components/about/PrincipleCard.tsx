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
        border-(--border)
        bg-(--surface)
        p-6
        transition-all
        duration-300
        hover:(--border-hover)
        hover:(--shadow-accent)
        "
        >

            <div
                className="
                mb-6
                text-(--accent)
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
            text(--text-primary)
        "
            >
                {principle.title}
            </h3>

            <p
                className="
            mt-3
            leading-relaxed
            text(--text-secondary)
        "
            >
                {principle.description}
            </p>
        </article>
    );
}