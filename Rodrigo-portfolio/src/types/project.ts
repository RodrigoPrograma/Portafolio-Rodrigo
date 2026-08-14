export type ProjectStatus = "Completado" | "En Progreso" | "Archivado";

export interface Project {
  id: string;
  title: string;
  alt: string;
  description: string;
  image: string;
  technologies: readonly string[];
  repositoryUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status: ProjectStatus;
}