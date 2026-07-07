import type { PosterProps } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { formatDateHr } from "@/utils/functions";

const BlogCard = ({
  id,
  blog_title,
  blog_thumbnail,
  published_date,
  blog_description,
  publisher_id,
  editor_id,
  edited_date,
  deleted,
}: PosterProps) => {
  const link = `/admin/posts/${id}`;
  const date = edited_date ? formatDateHr(edited_date) : formatDateHr(published_date);
  const dateString = edited_date
    ? deleted
      ? `Deleted on: ${date}`
      : `Edited on: ${date}`
    : `Published on: ${date}`;
  const nameString = editor_id
    ? deleted
      ? `Deleted by: ${editor_id}`
      : `Edited by: ${editor_id}`
    : `Published by: ${publisher_id}`;
  return (
    <Link
      href={link}
      className="w-75 md:w-xl xl:w-2xl py-2 md:py-4 bg-slate-700 rounded-sm md:rounded-md flex items-center pl-2 md:pl-4 pr-2 md:pr-4 gap-2 md:gap-4 overflow-hidden"
    >
      {blog_thumbnail.length !== 0 && (
        <div className="relative w-24 sm:w-32 md:w-44 h-full bg-gray-100 overflow-hidden flex items-center justify-center border border-white rounded-md">
          {blog_thumbnail[0].type === "IMAGE" ? (
            <Image
              src={blog_thumbnail[0].url}
              alt={blog_title}
              width={800}
              height={450}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              className="w-full h-full"
            />
          ) : (
            <video
              src={blog_thumbnail[0].url}
              controls
              className="w-full h-full object-cover max-h-100"
              preload="metadata"
            />
          )}
        </div>
      )}
      <div className="flex-1 flex flex-col justify-start">
        <h3 className="text-xs md:text-lg font-semibold text-white leading-4">{blog_title}</h3>
        <p className={`text-[9px] md:text-sm italic ${deleted ? "text-red-400" : "text-gray-300"}`}>
          {dateString}
        </p>
        <p className={`text-[9px] md:text-sm italic ${deleted ? "text-red-400" : "text-gray-300"}`}>
          {nameString}
        </p>
        <p
          className={`text-[9px] md:text-sm text-gray-300 ${blog_thumbnail.length && blog_thumbnail[0].type === "IMAGE" ? "line-clamp-2 md:line-clamp-4" : "line-clamp-5 md:line-clamp-8"}`}
        >
          {blog_description}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
