import type { IconType } from "react-icons";

import {
  TbHierarchy3,
  TbBolt,
  TbSparkles,
  TbAccessible,
} from "react-icons/tb";

export interface Principle {
  title: string;
  description: string;
  icon: IconType;
}

export const principles = [
  {
    title: "Arquitectura",
    description:
      "Código limpio y sistemas preparados para evolucionar sin perder claridad.",
    icon: TbHierarchy3,
  },
  {
    title: "Performance",
    description:
      "Interfaces rápidas y optimizadas desde el primer render.",
    icon: TbBolt,
  },
  {
    title: "UX First",
    description:
      "Cada decisión busca crear experiencias simples e intuitivas.",
    icon: TbSparkles,
  },
  {
    title: "Accesibilidad",
    description:
      "Experiencias inclusivas siguiendo buenas prácticas web.",
    icon: TbAccessible,
  },
] satisfies Principle[];