const navigationLinks = [
    { label: "Inicio", href: "#" },
    { label: "Sobre mí", href: "#about" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
];

const socialLinks = [
    { label: "GitHub", href: "https://github.com/RodrigoPrograma/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rodrigo-alonzo/" },
];

export default function Footer() {
    return (
        <footer className="border-t border-black/10 bg-black text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
                    {/* Identity / CTA */}
                    <div className="max-w-xl">
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                            Frontend / Full Stack Developer
                        </p>

                        <h2 className="max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
                            Construyamos algo juntos.
                        </h2>

                        <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
                            Construyo experiencias web modernas con un enfoque en
                            el rendimiento, la usabilidad y el código mantenible.
                        </p>

                        <a
                            href="https://wa.me/message/AXKEZI2N2RCAI1"
                            target="_blank"
                            rel="noreferrer"
                            className="
                                mt-8
                                inline-flex
                                items-center
                                rounded-full
                                border
                                border-cyan-400
                                px-5
                                py-2.5
                                text-sm
                                font-medium
                                text-cyan-400
                                transition-colors
                                hover:bg-cyan-400
                                hover:text-black
                                focus-visible:outline
                                focus-visible:outline-offset-4
                                focus-visible:outline-cyan-400
                            "
                        >
                            Contáctame
                        </a>
                    </div>

                    {/* Navigation */}
                    <nav aria-label="Footer navigation">
                        <h3 className="text-sm font-medium text-white">
                            Navegación
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {navigationLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="
                                            text-sm
                                            text-white/60
                                            transition-colors
                                            hover:text-white
                                            focus-visible:outline
                                            focus-visible:outline-offset-4
                                            focus-visible:outline-cyan-400
                                        "
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social links */}
                    <nav aria-label="Social links">
                        <h3 className="text-sm font-medium text-white">
                            Conectemos
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {socialLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="
                                            text-sm
                                            text-white/60
                                            transition-colors
                                            hover:text-white
                                            focus-visible:outline
                                            focus-visible:outline-offset-4
                                            focus-visible:outline-cyan-400
                                        "
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}

                            <li>
                                <a
                                    href="mailto:ralonzo1337@gmail.com"
                                    className="
                                        text-sm
                                        text-white/60
                                        transition-colors
                                        hover:text-white
                                        focus-visible:outline
                                        focus-visible:outline-offset-4
                                        focus-visible:outline-cyan-400
                                    "
                                >
                                    Email
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="mt-16 border-t border-white/10 pt-6">
                    <p className="text-xs text-white/40">
                        © {new Date().getFullYear()} Rodrigo Alonzo
                    </p>
                </div>
            </div>
        </footer>
    );
}