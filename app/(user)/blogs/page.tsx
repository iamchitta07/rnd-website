import BlogCard from "../_components/BlogCard";
import { getPosts } from "@/utils/admin/posts";
import { Suspense } from "react";

async function GetPosts() {
  const posts = await getPosts();
  if (!posts) {
    return (
      <div className="w-full mt-20 lg:mt-18 px-5 lg:px-20 flex flex-col items-center gap-4 flex-1">
        <h1 className="text-2xl font-bold text-white flex items-center justify-center w-full">
          No Post Found
        </h1>
      </div>
    );
  }
  const filterPosts = posts.filter((post) => post.deleted !== true);
  return (
    <div className="w-full mt-14 lg:mt-18 px-5 lg:px-20 flex flex-col items-center gap-4 flex-1">
      {filterPosts.length ? (
        <>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">Our Blogs</h1>
          <ul className="w-full flex flex-wrap justify-center">
            {filterPosts.map((e) => (
              <BlogCard key={e.id} {...e} />
            ))}
          </ul>
        </>
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
          <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full min-h-screen">
            Loading...
          </h1>
        }
      >
        <GetPosts />
      </Suspense>
    </div>
  );
};

export default Home;
