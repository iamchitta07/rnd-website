import Image from "next/image";
import Link from "next/link";
import VideoCard from "./VideoCard";

export interface RecentPostsProps {
  type: "image" | "video";
  mediaSrc: string;
  date: string;
  title: string;
  description: string;
}

export default function RecentPostCard({
  type,
  mediaSrc,
  date,
  title,
  description,
}: RecentPostsProps) {
  return (
    <>
      {/* 1. Media Container (9:16 Aspect Ratio) */}
      {/* Width is 100% on mobile, but constrained to fixed widths (e.g., sm:w-64 or md:w-72) on desktop to keep the 9:16 scale perfect */}
      {type === "video" ? (
        <article className="w-50 h-100 md:w-80 md:h-140 flex flex-col overflow-hidden rounded-md border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
          <div className="relative aspect-9/16 flex justify-center overflow-hidden bg-neutral-100 h-55 md:h-100 shrink-0 dark:bg-neutral-800">
            <VideoCard src={mediaSrc} />
          </div>
          {/* 2. Content Container */}
          <div className="flex flex-1 flex-col px-2 md:px-2 w-full">
            {/* Meta Row */}
            <div className="text-[10px] md:text-md font-medium text-neutral-500 dark:text-neutral-400 mt-1">
              <time dateTime={date}>{date}</time>
            </div>

            {/* Title */}
            <h3 className="mt-0.5 text-xs md:text-md font-bold tracking-normal text-neutral-900 line-clamp-2 dark:text-neutral-100 transition-colors dark:group-hover:text-purple-400">
              {title}
            </h3>

            {/* Short Description */}
            <p className="mt-1 text-[11px] md:text-sm leading-3 md:leading-4 text-neutral-600 line-clamp-6 sm:line-clamp-5 dark:text-neutral-400">
              {description}
            </p>

            <Link href="/" className="mt-auto mb-2">
              <span className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                View Post
                <svg
                  className="ml-1 h-4 w-4 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </article>
      ) : (
        <article className="w-64 h-100 md:w-100 md:h-140 flex flex-col overflow-hidden rounded-md border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
          <div className="relative aspect-square overflow-hidden bg-neutral-100 w-64 md:w-100 shrink-0 dark:bg-neutral-800">
            <Image
              src={mediaSrc}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, 300px"
              className="object-cover"
            />
          </div>
          {/* 2. Content Container */}
          <div className="flex flex-1 flex-col px-2 w-full md:w-100">
            {/* Meta Row */}
            <div className="text-[10px] md:text-md font-medium text-neutral-500 dark:text-neutral-400 mt-1">
              <time dateTime={date}>{date}</time>
            </div>

            {/* Title */}
            <h3 className="mt-0.5 text-xs md:text-xl font-bold tracking-tight text-neutral-900 line-clamp-2 md:line-clamp-4 dark:text-neutral-100 transition-colors dark:group-hover:text-purple-400">
              {title}
            </h3>

            {/* Short Description */}
            <p className="mt-0.5 text-xs md:text-sm leading-3 md:leading-4 text-neutral-600 line-clamp-4 sm:line-clamp-5 dark:text-neutral-400">
              {description}
            </p>

            <Link href="/" className="mt-auto block mb-2">
              <span className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                View Post
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </article>
      )}
    </>
  );
}
