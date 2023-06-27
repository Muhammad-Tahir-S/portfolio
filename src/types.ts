export type Experience = {
  name: string;
  role: string;
  duration: string;
  url?: string;
  duties?: (string | { text: string; link: string })[];
};

export type Project = {
  title?: string;
  description?: string;
  techStack?: string[];
  url?: string;
};
