import PortfolioImg from "../assets/projects/portafolio.png";
import postman from "../assets/projects/Postman.png";
import estudio from "../assets/projects/Estudio.png";
import vientos from "../assets/projects/vientos.png";
import uñas from "../assets/projects/Nails.png";
import hamburguesa from "../assets/projects/Hamburguesa.png";

import type { Project } from "@/types/project";

export const projects = [
    {
        id: "1",
        title: "Mi primer portafolio",
        alt: "Imagen del Portfolio",
        description: "Un sitio web personal para mostrar mi trabajo y experiencia.",
        image: PortfolioImg,
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        repositoryUrl: "https://github.com/RodrigoPrograma/RodrigoPrograma.github.io",
        liveUrl: "https://rodrigoprograma.github.io/",
        featured: true,
        status: "Completado",
    },
    {
        id: "2",
        title: "API de Artículos - Spring Boot",
        alt: "Imagen del Dashboard",
        description: "API REST para la gestión de artículos (CRUD) que permite crear, listar, actualizar y eliminar productos de una base de datos",
        image: postman,
        technologies: ["Java", "Spring Boot", "Maven", "MySQL"],
        repositoryUrl: "https://github.com/RodrigoPrograma/API-JAVA-RODRIGO-ALONZO",
        featured: false,
        status: "En Progreso",
    },
    {
        id: "3",
        title: "CarLog",
        alt: "Imagen del Proyecto",
        description: "CarLog es un proyecto de gestión de información vehicular diseñado como una aplicación escalable, moderna y orientada a APIs.",
        image: postman,
        technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "Docker", "CI/CD"],
        repositoryUrl: "https://github.com/RodrigoPrograma/Carlog",
        featured: false,
        status: "En Progreso",
    },
    {
        id: "4",
        title: "Web Estudio Balaguer - Ayala",
        alt: "Imagen del Estudio",
        description: "Sitio web para el estudio juridico Balaguer - Ayala.",
        image: estudio,
        technologies: ["JavaScript", "React", "bootstrap", "CSS"],
        liveUrl: "https://estudiobalaguer.netlify.app/",
        featured: false,
        status: "En Progreso",
    },
    {
        id: "5",
        title: "Web Hotel Vientos del Sur",
        alt: "Imagen del Hotel",
        description: "Sitio web para el hotel Vientos del Sur.",
        image: vientos,
        technologies: ["JavaScript", "React", "bootstrap", "CSS"],
        liveUrl: "https://vientosdelsur.netlify.app/",
        featured: false,
        status: "En Progreso",
    },
    {
        id: "6",
        title: "Web Nails By Cami",
        alt: "Imagen del Salón",
        description: "Sitio web para el salón de belleza Nails By Cami.",
        image: uñas,
        technologies: ["JavaScript", "React", "bootstrap", "CSS"],
        liveUrl: "https://nailsbycami.netlify.app/",
        featured: false,
        status: "En Progreso",
    },
    {
        id: "7",
        title: "Web Fast Food Truck",
        alt: "Imagen del Restaurante",
        description: "Landing page para el restaurante Fast Food Truck.",
        image: hamburguesa,
        technologies: ["JavaScript", "React", "bootstrap", "CSS"],
        liveUrl: "https://matiaserossi.github.io/LandingAPG2/",
        featured: false,
        status: "En Progreso",
    },
] satisfies Project[];