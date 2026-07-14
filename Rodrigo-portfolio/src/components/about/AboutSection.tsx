import AboutStatement from "./AboutHeader";
import PrincipleGrid from "./PrinciplesGrid";
import Reveal from "../ui/reveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        scroll-mt-24
        mx-auto
        max-w-7xl
        px-6
        py-24
      "
    >
      <Reveal>
    <AboutStatement />
  </Reveal>

  <Reveal className="mt-16" delay={150}>
    <PrincipleGrid />
  </Reveal>

  <Reveal className="mt-16" delay={300}>
    <div className="mt-20 border-t border-[var(--border)] pt-8"></div>
    <br/>
    <p className="max-w-xl text-text leading-relaxed">
  Cada decisión técnica tiene un propósito.
</p>

<p className="mt-2 text-text font-medium">
  Crear productos mantenibles,
  rápidos y preparados para crecer.
</p>
  </Reveal>
    </section>
  );
}