import SearchBarBlogs from "../_components/SearchBarBlogs";
import BlogCard from "../_components/BlogCard";
import StickyAddButton from "../_components/AddButton";
import { getPosts } from "@/utils/admin/posts";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts | Admin",
  description:
    "Write from the begining of the dark age alot of ground breaking discoveries were made by man. There is no field in which research is not done. Research and Development (R&D) flourishes where young minds and experienced faculties work synergistically. R&D Cell has been established to promote and monitor the research Programs of the institute. The cell administers all the research Programs of the university by monitoring and coordinating the research Programs.The Research and Development Cell aims to nurture research culture in the College by promoting research in newly emerging and challenging areas of Engineering, Technology, Science and Humanities. Faculty and students have been encouraged to be creative, since it is the creative aspect that induces newer thinking. Lectures and demonstration are made for students to kindle their spirit of creativity by our own faculty and other experts along with paper presentation and workshop.",
};

async function GetPosts() {
  const posts = await getPosts();
  return (
    <div className="w-full mt-20 lg:mt-18 px-5 lg:px-20 flex flex-col items-center gap-4 flex-1">
      <SearchBarBlogs data={posts} />
      {posts.length ? (
        <ul className="w-full flex flex-col gap-2 md:gap-3 items-center ">
          {posts.map((e) => (
            <BlogCard key={e.id} {...e} />
          ))}
        </ul>
      ) : (
        <h1 className="text-2xl font-bold text-white flex items-center justify-center w-full">
          No Post Found
        </h1>
      )}
    </div>
  );
}

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col w-full">
      <Suspense
        fallback={
          <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full">
            Loading...
          </h1>
        }
      >
        <GetPosts />
      </Suspense>
      <StickyAddButton dir="posts/new-post" />
    </div>
  );
};

export default Home;
