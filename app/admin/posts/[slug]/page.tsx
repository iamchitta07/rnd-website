import { getPost } from "@/utils/admin/posts";
import { formatDateHr } from "@/utils/functions";
import { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import BackButton from "../../../../_components/BackButton";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(+slug);
  if (!post) {
    return {
      title: "Post not found | Admin",
      description: "Post not found",
    };
  }

  return {
    title: post.blog_title + " | Admin",
    description: post.blog_description,
  };
}

async function GetPost({ slug }: { slug: string }) {
  const post = await getPost(+slug);
  if (!post) {
    return (
      <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full">
        Post not found
      </h1>
    );
  }
  const {
    edited_date,
    pulished_date,
    deleted,
    editor_id,
    publisher_id,
    blog_title,
    blog_thumbnail,
    blog_description,
  } = post;
  const date = edited_date ? formatDateHr(edited_date) : formatDateHr(pulished_date);
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
    <div className="w-75 md:w-xl xl:w-2xl flex flex-col items-center gap-3">
      {blog_thumbnail.length !== 0 && (
        <div className="relative w-full h-auto overflow-hidden border border-white bg-muted flex items-center justify-center">
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
      <div className="flex-1 flex flex-col mt-2 md:mt-5">
        <h3 className="text-lg md:text-2xl font-semibold text-white leading-4 mb-2">
          {blog_title}
        </h3>
        <p
          className={`text-sm md:text-lg italic ${deleted ? "text-red-400/70" : "text-gray-300/70"}`}
        >
          {dateString}
        </p>
        <p
          className={`text-sm md:text-lg italic ${deleted ? "text-red-400/70" : "text-gray-300/70"}`}
        >
          {nameString}
        </p>
        <p className={`text-sm md:text-lg text-gray-300 text-justify`}>{blog_description}</p>
      </div>
      <div className="w-full text-white flex justify-center">
        {post.deleted !== true && (
          <Link
            href={`/admin/posts/edit-post/${post.id}`}
            className="w-40 md:w-50 bg-primary rounded-md py-3 md:py-3 text-sm md:text-lg  flex justify-center items-center"
          >
            Edit Post
          </Link>
        )}
      </div>
    </div>
  );
}

const Home = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return (
    <div className="w-full mt-14 md:mt-16 mb-20 md:mb-0 px-5 lg:px-20 overflow-hidden">
      <BackButton />
      <Suspense
        fallback={
          <h1 className="text-2xl font-bold text-white h-screen flex items-center justify-center w-full">
            Loading...
          </h1>
        }
      >
        <div className="text-white h-full w-full flex flex-col justify-center items-center gap-2 md:gap-4 md:mb-20">
          <GetPost slug={slug} />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
