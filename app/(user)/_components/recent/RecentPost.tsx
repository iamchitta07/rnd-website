import Link from "next/link";
import classes from "./RecentPost.module.css";
import ImageCarousel from "./ImageCarousel";
import { ChevronRight } from "lucide-react";
import VideoCard from "./VideoCard";
import { PosterProps } from "@/types";
import { getFormattedDate, getFormattedTime } from "@/utils/functions";

export default function RecentPost({
  id,
  blog_title,
  blog_thumbnail,
  blog_description,
  published_date,
  edited_date,
}: PosterProps) {
  const pickedDate = edited_date ?? published_date;
  const date = getFormattedDate(pickedDate) + ", " + getFormattedTime(pickedDate);
  const des = blog_description.replace(/\n/g, "<br/>");
  return (
    <div className={classes.outerBox}>
      {blog_thumbnail.length > 0 &&
        (blog_thumbnail[0].type === "IMAGE" ? (
          <ImageCarousel title={blog_title} IMAGES={blog_thumbnail} />
        ) : (
          <VideoCard media={blog_thumbnail[0]} />
        ))}
      <h1 className={classes.date}>{date}</h1>
      <h1 className={classes.title}>{blog_title}</h1>
      <p className={classes.des} dangerouslySetInnerHTML={{ __html: des }} />
      <Link href={`/blogs/b/${id}`} className={classes.navLink}>
        Know More <ChevronRight className={classes.icon} />
      </Link>
    </div>
  );
}
