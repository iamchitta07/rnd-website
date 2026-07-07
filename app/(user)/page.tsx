import { getPosts } from "@/utils/admin/posts";
import AboutUs from "../_components/aboutUs/AboutUs";
import VoyageSlider from "../_components/carousel/activitiesCarousel/Carousel";
import Carousel from "../_components/carousel/centerCarousel/Carousel";
import Header from "../_components/header/Header";
import { userHeaderLinks } from "@/utils";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as UiCarousel,
} from "@/components/ui/carousel";
import RecentPost from "./_components/recent/RecentPost";
import { Suspense } from "react";

async function GetRecents() {
  const recentPosts = await getPosts();
  if (!recentPosts)
    return (
      <div className="text-center text-2xl font-bold w-full h-50 flex justify-center items-center">
        No Post Found
      </div>
    );
  const posts = recentPosts.filter((post) => post.deleted === false);
  return (
    <div className="flex flex-col w-full items-center px-4 md:px-8 my-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Recent Posts</h1>
      <UiCarousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-sm md:max-w-2xl lg:max-w-6xl"
      >
        <CarouselContent>
          {posts.map((post) => (
            <CarouselItem
              key={post.id}
              className="basis-full md:basis-1/2 lg:basis-1/3 pl-0 w-full flex justify-center"
            >
              <div className="p-1">
                <RecentPost {...post} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:-left-3 lg:left-0 text-black bg-white/60 hover:bg-white duration-200 border-none" />
        <CarouselNext className="right-2 md:-right-3 lg:right-0 text-black bg-white/60 hover:bg-white duration-200 border-none" />
      </UiCarousel>
    </div>
  );
}

export default function Home() {
  return (
    <div className="text-white">
      <Header LINKS={userHeaderLinks} />
      <Carousel
        images={[
          { src: "/activities/one.webp", text: "Conjecture-2025" },
          { src: "/activities/two.webp", text: "Aarohan-2025" },
          { src: "/activities/three.webp", text: "Aarohan-2025 Opening Ceremony" },
        ]}
        interval={5000}
      />
      <AboutUs />
      <VoyageSlider />
      <Suspense
        fallback={
          <div className="w-full h-40 flex justify-center items-center text-5xl mb-20">
            Loading...
          </div>
        }
      >
        <GetRecents />
      </Suspense>
    </div>
  );
}
