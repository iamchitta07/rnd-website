import type { ContackDetail, SocialLink, NavLink } from "@/types";
import githubIcon from "@/public/logos/github.svg";
import instaIcon from "@/public/logos/insta.svg";
import fbIcon from "@/public/logos/fb.svg";
import linkedinIcon from "@/public/logos/linkedin.svg";

export const contactDetails: ContackDetail[] = [
  {
    title: "first contact",
    link: "#",
    text: "+91 62950 68732 (Chittajit Nath)",
  },
  {
    title: "second contact",
    link: "#",
    text: "+91 72378 98392 (Dipayan R.Choudhary)",
  },
  {
    title: "email",
    link: "#",
    text: "cca.rnd@nitdgp.ac.in",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub Link",
    image: githubIcon,
    link: "https://www.github.com/iamchitta07",
  },
  {
    title: "Linkedin Link",
    image: linkedinIcon,
    link: "https://www.linkedin.com/in/chittajit-nath",
  },
  {
    title: "Instagram Link",
    image: instaIcon,
    link: "https://www.instagram.com/imchitta07",
  },
  {
    title: "Facebook Link",
    image: fbIcon,
    link: "https://www.facebook.com/imchitta07",
  },
];

export const navLinks: NavLink[] = [
  {
    title: "our projects",
    label: "Out Projects",
    link: "/projects",
  },
  {
    title: "our events",
    label: "Events",
    link: "/events",
  },
  {
    title: "our team",
    label: "Our Team",
    link: "/team",
  },
  {
    title: "give your feedback",
    label: "Feedback",
    link: "/join-us",
  },
  {
    title: "only for admin",
    label: "Admin",
    link: "/admin",
  },
];

export const userHeaderLinks: NavLink[] = [
  {
    title: "home",
    label: "Home",
    link: "/",
  },
  {
    title: "our events",
    label: "Events",
    link: "/events",
  },
  {
    title: "our blogs",
    label: "Blog",
    link: "/blogs",
  },
  {
    title: "our projects",
    label: "Our Projects",
    link: "/projects",
  },
  {
    title: "our team",
    label: "Our Team",
    link: "/team",
  },
  {
    title: "give your feedback",
    label: "Join Us",
    link: "/join-us",
  },
];

export const adminHeaderLinks: NavLink[] = [
  {
    title: "dashboard",
    label: "Dashboard",
    link: "/admin",
  },
  {
    title: "posts",
    label: "Posts",
    link: "/admin/posts",
  },
  {
    title: "event",
    label: "Events",
    link: "/admin/events",
  },
  {
    title: "projects",
    label: "Projects",
    link: "/admin/projects",
  },
  {
    title: "messages",
    label: "Messages",
    link: "/admin/messages",
  },
  {
    title: "update profile",
    label: "Profile",
    link: "/admin/profile",
  },
  {
    title: "logout",
    label: "Log-Out",
    link: "/admin/log-out",
  },
];
