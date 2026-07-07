import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import Link from "next/link";
import type { ProjectCardProps } from "@/types";
import { formatDateHr } from "@/utils/functions";
import classes from "./ProjectCard.module.css";

const ProjectCard = ({ id, title, link, author, date }: ProjectCardProps) => {
  const viewLink = `projects/${id}`;
  const gitlab = link.includes("gitlab.com");
  const dateTime = formatDateHr(date);
  return (
    <Link href={viewLink} className={classes.card}>
      <div className={classes.iconCover}>
        {gitlab === true ? (
          <FaGitlab className={classes.icon} />
        ) : (
          <FaGithub className={classes.icon} />
        )}
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
