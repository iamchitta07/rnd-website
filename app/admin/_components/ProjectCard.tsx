"use client";
import GitHub from "@/public/logos/github.svg";
import GitLab from "@/public/logos/gitlab.svg";
import Link from "next/link";
import Image from "next/image";
import { useIsMobile } from "@/utils/functions";
import type { ProjectCardProps } from "@/types";

const ProjectCard = ({ id, title, link, author }: ProjectCardProps) => {
  const isMobile = useIsMobile();
  const viewLink = `projects/${id}`;
  const gitlab = link.includes("gitlab.com");
  const icon = gitlab ? GitLab : GitHub;
  const ht = isMobile ? 20 : 40;
  return (
    <Link
      href={viewLink}
      className="border border-white rounded-lg flex items-center gap-3 pl-2 md:pl-4 w-75 md:w-md h-14 md:h-18 bg-slate-100 hover:bg-slate-300 duration-200"
    >
      <div className="h-9 w-9 md:h-13 md:w-13 rounded-full flex justify-center items-center border border-black">
        <Image src={icon} width={ht} height={ht} alt={title} />
      </div>
      <div className="leading-5">
        <h1 className="text-md md:text-lg">{title}</h1>
        <h1 className="text-xs md:text-md">
          <i>Developed by {author}</i>
        </h1>
      </div>
    </Link>
  );
};

export default ProjectCard;
