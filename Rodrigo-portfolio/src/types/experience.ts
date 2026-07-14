export interface Experience {
  id: string;
  title: string;
  category: string;
  period: string;
  description: string;
  technologies: string[];
  image: string;
  current?: boolean;
}