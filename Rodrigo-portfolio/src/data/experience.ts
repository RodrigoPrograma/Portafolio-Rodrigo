import InitialImage from "../assets/experience/Initial.png";
import FreelanceImage from "../assets/experience/freelance.jpg";
import wordpressImg from "../assets/experience/wordpress.jpg";
import architectureImg from "../assets/experience/architecture.jpg";
import backendImg from "../assets/experience/backend.jpg";
import TodayImage from "../assets/experience/today.jpg";
import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "M-01",
    title: "Primeros pasos",
    period: "2022",
    category: "Aprendizaje",
    description:
      "Comencé aprendiendo los fundamentos del desarrollo web, comprendiendo cómo funcionan HTML, CSS y JavaScript para construir interfaces desde cero. Esta etapa despertó mi interés por crear experiencias para la web y marcó el inicio de mi camino como desarrollador.",
    image: InitialImage,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
    ],
  },
  {
    id: "M-02",
    title: "WordPress Developer",
    period: "2024",
    category: "Profesional",
    description:
      "Mi primera experiencia profesional. Trabajando diariamente con WordPress y Elementor desarrollé criterio técnico y estético, aprendiendo la importancia de una buena estructura, una correcta configuración y una experiencia de usuario consistente en proyectos reales.",
    image: wordpressImg,
    technologies: [
      "WordPress",
      "Elementor",
      "HTML",
      "CSS",
      "JavaScript",
      "Notion",
    ],
  },
  {
    id: "M-03",
    title: "Freelance Developer",
    period: "2024 · 2025",
    category: "Freelance",
    description:
      "Comencé a desarrollar proyectos para clientes reales, aplicando los conocimientos adquiridos durante mi experiencia profesional. Uno de los proyectos más representativos fue la landing page para Piedras y Mármoles, donde participé desde la planificación hasta la entrega final.",
    image: FreelanceImage,
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Responsive Design",
      "UI Design",
    ],
  },
  {
    id: "M-04",
    title: "Arquitectura Frontend",
    period: "2025 · Actualidad",
    category: "Arquitectura",
    description:
      "Mi enfoque evolucionó hacia el desarrollo de aplicaciones escalables. Comencé a priorizar la organización del código, la reutilización de componentes, la accesibilidad, el rendimiento y una arquitectura preparada para crecer.",
    image: architectureImg,
    technologies: [
      "React",
      "TypeScript",
      "Component Architecture",
      "Accessibility",
      "Performance",
    ],
  },
  {
    id: "M-05",
    title: "Backend & APIs",
    period: "Actualidad",
    category: "Backend",
    description:
      "Amplié mis conocimientos hacia el desarrollo Full Stack integrando APIs REST, autenticación y bases de datos para construir aplicaciones completas con una arquitectura consistente entre frontend y backend.",
    image: backendImg,
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "JWT",
    ],
  },
  {
    id: "NOW",
    title: "Siempre aprendiendo",
    period: "Hoy",
    category: "Fullstack",
    description:
      "Actualmente continúo perfeccionando mis conocimientos en arquitectura de software, desarrollo Full Stack y experiencia de usuario, buscando construir aplicaciones modernas, mantenibles y preparadas para evolucionar junto con las necesidades de cada proyecto.",
    image: TodayImage,
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Next.js",
    ],
    current: true,
  },
];