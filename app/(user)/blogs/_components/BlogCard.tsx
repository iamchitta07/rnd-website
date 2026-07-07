import { notFound } from "next/navigation";
import ImageCarousel from "./ImageCarousel";
import classes from "./BlogCard.module.css";
import VideoCard from "./VideoCard";
import type { PosterProps } from "@/types";
import { getFormattedDate, getFormattedTime } from "@/utils/functions";
import BackDrop from "./BackDrop";

export default function BlogCard({
  blog_title,
  blog_thumbnail,
  blog_description,
  published_date,
}: PosterProps) {
  if (!blog_thumbnail || blog_thumbnail.length === 0) {
    notFound();
  }
  const date = getFormattedDate(published_date) + ", " + getFormattedTime(published_date);
  const des = blog_description.replace(/\n/g, "<br/>");
  return (
    <>
      <BackDrop />
      <dialog open className={classes.outerBox}>
        {blog_thumbnail[0].type === "IMAGE" ? (
          <ImageCarousel IMAGES={blog_thumbnail} title={blog_title} />
        ) : (
          <VideoCard media={blog_thumbnail[0]} />
        )}
        <div className={classes.textBox}>
          <h1 className={classes.title}>{blog_title}</h1>
          <h1 className={classes.date}>{date}</h1>
          <p
            className={classes.description}
            dangerouslySetInnerHTML={{
              __html: des,
            }}
          />
        </div>
      </dialog>
    </>
  );
}
