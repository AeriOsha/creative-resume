
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string[];
}

export interface BioResponse {
  shortBio: string;
  longBio: string;
}
