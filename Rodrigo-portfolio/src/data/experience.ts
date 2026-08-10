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
        title: "Las bases",
        period: "2022",
        category: "Aprendizaje",
        description:
            "Todo comenzó entendiendo cómo pensar como desarrollador. Aprendí lógica de programación, estructuras de control y los fundamentos de HTML, CSS y JavaScript. Esta etapa me permitió dejar de copiar código para empezar a comprender cómo construir soluciones desde cero.",
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
        title: "Mis primeros proyectos",
        period: "2023",
        category: "Freelance",
        description: "Después de dominar las bases, comencé a desarrollar proyectos personales para poner en práctica lo aprendido. Aplicaciones como mi To-Do List y mi primer portfolio marcaron el momento en el que pasé de estudiar programación a crear productos funcionales y enfrentar problemas reales de desarrollo.",
        image: FreelanceImage,
        technologies: [
            "React",
            "JavaScript",
            "CSS",
            "Responsive Design",
            "Github",
        ],
    },
    {
        id: "M-03",
        title: "Arquitectura y experiencia de usuario",
        period: "2024",
        category: "Arquitectura",
        description:
            "A medida que los proyectos crecían, también cambió mi forma de desarrollar. Empecé a priorizar la arquitectura de componentes, la reutilización del código, la accesibilidad y el rendimiento, buscando construir aplicaciones mantenibles y preparadas para evolucionar.",
        image: wordpressImg,
        technologies: [
            "React",
            "Design Systems",
            "Arquitectura",
            "Accessibilidad",
            "Rendimiento",
        ],
    },
    {
        id: "M-04",
        title: "Wordpress developer",
        period: "2025",
        category: "Profesional",
        description:
            "Mi primer paso en la industria fue como desarrollador WordPress dentro de una agencia. Trabajé en la construcción y mantenimiento de sitios para distintos clientes, aprendiendo a desenvolverme en entornos profesionales, colaborar con equipos y entregar soluciones de calidad en proyectos reales.",
        image: architectureImg,
        technologies: [
            "WordPress",
            "Elementor",
            "UX/UI",
            "Slack",
            "Shopify",
            "Notion",
        ],
    },
    {
        id: "M-05",
        title: "Backend & APIs",
        period: "2025 - 2026",
        category: "Backend",
        description:
            "Con una base sólida en frontend, decidí ampliar mis conocimientos hacia el desarrollo backend. Comencé a trabajar con Node.js, Express, bases de datos y APIs REST, mientras incorporaba Java para fortalecer mi comprensión de la programación orientada a objetos y el desarrollo de aplicaciones completas.",
        image: backendImg,
        technologies: [
            "Node.js",
            "Express",
            "MongoDB",
            "Java",
            "Spring Boot",
            "JWT",
        ],
    },
    {
        id: "M-06",
        title: "Construyendo el siguiente nivel",
        period: "Hoy",
        category: "Fullstack",
        description:
            "Hoy continúo perfeccionando mis habilidades con el objetivo de consolidarme como desarrollador Full Stack. Mi foco está puesto en construir productos escalables, profundizar en arquitectura de software y participar en proyectos donde pueda seguir creciendo tanto técnica como profesionalmente.",
        image: TodayImage,
        technologies: [
            "TypeScript",
            "Node.js",
            "SQL",
            "AWS",
            "Next.js",
        ],
        current: true,
    },
] satisfies Experience[];;