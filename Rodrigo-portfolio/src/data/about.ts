export interface Principle {
  title: string;
  description: string;
  icon: string;
}

export const principles: Principle[] = [
  {
    title: "Arquitectura",
    description:
      "Código limpio y sistemas preparados para evolucionar sin perder claridad.",
    icon: "🏗️",
  },
  {
    title: "Performance",
    description:
      "Interfaces rápidas y optimizadas desde el primer render.",
    icon: "⚡",
  },
  {
    title: "UX First",
    description:
      "Cada decisión busca crear experiencias simples e intuitivas.",
    icon: "✨",
  },
  {
    title: "Accesibilidad",
    description:
      "Experiencias inclusivas siguiendo buenas prácticas web.",
    icon: "♿",
  },
];