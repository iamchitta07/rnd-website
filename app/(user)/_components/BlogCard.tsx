import type { PosterProps } from "@/types";
import Link from "next/link";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";
import { Images } from "lucide-react";

const BlogCard = ({ id, blog_title, blog_thumbnail }: PosterProps) => {
  const link = `/blogs/b/${id}`;

  return (
    <Link
      href={link}
      className="block w-28 h-36 md:w-56 md:h-72 lg:w-70 lg:h-90 overflow-hidden bg-white border border-black"
    >
      {blog_thumbnail &&
        blog_thumbnail.length !== 0 &&
        (blog_thumbnail[0].type === "IMAGE" ? (
          <div className="relative w-full h-full">
            <Images className="absolute z-1 size-4 md:size- lg:size-6 text-white text-4xl right-2 top-1.5 md:right-3 md:top-2 group-hover:opacity-0 transition-opacity duration-300" />
            <Image
              src={blog_thumbnail[0].url}
              alt={blog_title}
              height={300}
              width={450}
              sizes="(max-width: 768px) 100vw, 200px"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ) : (
          <VideoPlayer src={blog_thumbnail[0].url} />
        ))}
    </Link>
  );
};

export default BlogCard;
