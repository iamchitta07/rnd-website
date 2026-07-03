import GitHub from "@/public/logos/github.svg";
import GitLab from "@/public/logos/gitlab.svg";
import Link from "next/link";
import Image from "next/image";
import type { ProjectCardProps } from "@/types";
import { formatDateHr } from "@/utils/functions";

const ProjectCard = ({ id, title, link, author, date }: ProjectCardProps) => {
  const viewLink = `projects/${id}`;
  const gitlab = link.includes("gitlab.com");
  const icon = gitlab ? GitLab : GitHub;
  const dateTime = formatDateHr(date);
  return (
    <Link
      href={viewLink}
      className="border border-white rounded-lg flex items-center gap-3 pl-2 md:pl-4 py-2 md:py-3 w-75 md:w-xl xl:w-2xl bg-slate-100 hover:bg-slate-300 duration-200"
    >
      <div className="h-9 w-9 md:h-16 md:w-16 rounded-full border border-black flex justify-center items-center">
        <div className="relative h-7 w-7 md:h-12 md:w-12">
          <Image src={icon} fill className="object-contain" alt={title} />
        </div>
      </div>
      <div className="leading-none flex flex-1 flex-col pr-2 md:pr-4">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-sm md:text-lg lg:text-2xl">{title}</h1>
          <h1 className="text-[9px] md:text-[14px] lg:text-lg italic font-light">On: {dateTime}</h1>
        </div>
        <h1 className="text-xs md:text-md lg:text-lg">
          Developed by<i> {author}</i>
        </h1>
      </div>
    </Link>
  );
};

export default ProjectCard;
