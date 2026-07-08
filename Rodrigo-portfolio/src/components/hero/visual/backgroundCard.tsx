import { heroCardSections } from './heroCardData';

export default function BackgroundCard() {
  return (
    <div
      className="
        relative
        w-full
        max-w-xl
        rounded-3xl
        border
        border-neutral-200
        bg-white/70
        p-8
        shadow-sm
        backdrop-blur
      "
    >
      <div className="space-y-8">
        {heroCardSections.map((section) => (
          <section key={section.title}>
            <span className="mb-4 text-xl font-semibold uppercase tracking-[0.18em] text-neutral-400 cursor-default">
              {section.title}
            </span>

            <div className="flex flex-wrap gap-2 ">
              {section.items.map((item) => (
                <span
                  key={item}
                  className="
                    cursor-default
                    rounded-full
                    border
                    border-neutral-200
                    bg-white
                    px-3
                    py-1.5
                    text-sm
                    font-medium
                    text-neutral-700
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}

        <div className="border-t border-neutral-200 pt-6">
          <p className="max-w-xs text-sm leading-7 text-neutral-500">
            Desarrollo aplicaciones web rápidas, accesibles y escalables, priorizando una arquitectura limpia y una excelente experiencia de usuario.
          </p>
        </div>
      </div>
    </div>
  );
}