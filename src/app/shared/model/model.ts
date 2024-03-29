export interface DataList<T> {
  data: T[];
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  repoUrl: string;
  type: string;
  technologies?: string;
  year: number;
}
export interface Skill {
  title: string;
  imageUrl: string;
}
