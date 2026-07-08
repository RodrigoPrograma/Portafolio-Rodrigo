export default function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">

      <a
        href="#projects"
        className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90"
      >
        Ver proyectos
      </a>

      <a
        href="#contact"
        className="rounded-xl border border-neutral-300 px-6 py-3 transition hover:bg-neutral-100"
      >
        Contactarme
      </a>

    </div>
  );
}