import { StaticImageData } from "next/image";

export interface ContackDetail {
  image: string;
  title: string;
  link: string;
  text: string;
}
export interface SocialLink {
  title: string;
  image: string;
  link: string;
}
export interface NavLink {
  label: string;
  link: string;
  title: string;
}
export interface Activity {
  title: string;
  label: string;
  image: StaticImageData;
}
export interface Posts {
  title: string;
  label: string;
  content: string;
  tags: string[];
  image: StaticImageData;
  publishedDate: Date;
}
export interface ProjectCardProps {
  id: string;
  title: string;
  link: string;
  author: string;
  content?: string;
}
