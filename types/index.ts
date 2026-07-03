import { StaticImageData } from "next/image";

export interface ContackDetail {
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
  date: Date;
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
export interface MessageProps {
  id: number;
  name: string;
  phone_number: string;
  mail: string;
  dept: string;
  year: string;
  domain_interested: string;
  comment: string;
  read: boolean;
  date: Date;
}
export interface ProfileProps {
  id: number;
  name: string;
  institiute_mail: string;
  dept: string;
  year: string;
  profile_image: string | null | StaticImageData;
  insta: string | null;
  github: string | null;
  facebook: string | null;
  linkedin: string | null;
  personal: string | null;
}

export interface MediaProps {
  id: number;
  url: string;
  type: "IMAGE" | "VIDEO";
}

export interface PosterProps {
  id: number;
  publisher_id: number;
  pulished_date: Date;
  blog_thumbnail: MediaProps[];
  blog_title: string;
  blog_description: string;
  editor_id: number | null;
  edited_date: Date | null;
  deleted: boolean;
}

export interface JoinUsProps {
    name: string;
    email: string;
    phone: string;
    dept: string;
    year: string;
    interest: string;
    content: string;
}
