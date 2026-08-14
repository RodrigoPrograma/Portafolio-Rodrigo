interface ProjectLinksProps {
    repositoryUrl?: string;
    liveUrl?: string;
}

export default function ProjectLinks({
    repositoryUrl,
    liveUrl,
}: ProjectLinksProps) {
    return (
        <footer
            className="
                mt-auto
        flex
        items-center
        justify-between
        border-t
        pt-4
            "
        >
            {repositoryUrl && (
                <a
                    href={repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
rounded-md
border
px-3
py-2
text-sm
font-medium
transition-colors
hover:bg-muted
hover:text-cyan-500
"
                >
                    GitHub
                </a>
            )}

            {liveUrl && (
                <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
rounded-md
border
px-3
py-2
text-sm
font-medium
transition-colors
hover:bg-muted
hover:text-green-500
"
                >
                    Live Demo
                </a>
            )}
        </footer>
    );
}