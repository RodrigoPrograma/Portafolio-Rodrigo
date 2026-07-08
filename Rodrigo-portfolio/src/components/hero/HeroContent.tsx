import HeroActions from "./HeroActions";

export default function HeroContent() {
  return (
    <div className="space-y-8">

      <span className="inline-flex rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-600">
        Disponible para nuevas oportunidades
      </span>

      <div className="space-y-4">
        <h1 className="text-5xl font-semibold tracking-tight text-neutral-950 lg:text-7xl">
          Full Stack Developer
        </h1>

        <p className="max-w-xl text-lg leading-8 text-neutral-600">
          Desarrollo aplicaciones web modernas enfocadas en rendimiento,
          escalabilidad y una excelente experiencia de usuario utilizando
          React, TypeScript y Node.js.
        </p>
      </div>

      <HeroActions />

    </div>
  );
}