export interface HeroCardSection {
  title: string;
  items: string[];
}

export const heroCardSections: HeroCardSection[] = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
];