import AboutStatement from "./AboutHeader";
import PrincipleGrid from "./PrinciplesGrid";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        mx-auto
        max-w-7xl
        px-6
        py-24
      "
    >
      <AboutStatement />

      <div className="mt-16">
        <PrincipleGrid />
      </div>

      <p
        className="
          mt-16
          max-w-xl
          text-lg
          leading-relaxed
          text-text
        "
      >
        Cada decisión técnica tiene un propósito:
        crear productos mantenibles, rápidos y preparados
        para crecer.
      </p>
    </section>
  );
}