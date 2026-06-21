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
export interface EventProps {
  id: number;
  publisher_id: number;
  pulished_date: Date;
  poster_image: string | StaticImageData;
  event_title: string;
  event_venue: string;
  event_date: Date;
  event_link: string | null;
  event_description: string;
  editor_id: number | null;
  edited_date: Date | null;
  deleted: boolean;
}
