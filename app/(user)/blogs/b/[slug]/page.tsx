import { getPost } from "@/utils/admin/posts";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BlogCard from "../_components/BlogCard";

export async function generateMetadata(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  const blog = await getPost(+slug);
  if (!blog || blog.deleted) {
    notFound();
  }
  return {
    title: blog.blog_title,
    description: blog.blog_description,
  };
}

async function GetBlog({ slug }: { slug: string }) {
  const blog = await getPost(+slug);
  if (!blog || blog.deleted) {
    notFound();
  }
  return <BlogCard {...blog} />;
}

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <Suspense
        fallback={
          <h1 className="text-2xl font-bold min-h-screen text-white h-full flex items-center justify-center w-full">
            Loading...
          </h1>
        }
      >
        <GetBlog slug={slug} />
      </Suspense>
    </div>
  );
}
