import AboutUs from "../_components/aboutUs/AboutUs";
import VoyageSlider from "../_components/carousel/activitiesCarousel/Carousel";
import Carousel from "../_components/carousel/centerCarousel/Carousel";
import Header from "../_components/header/Header";
import { RecentPosts } from "../_components/recentPosts/RecentPosts";
import { userHeaderLinks } from "@/utils";

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
      <div className="flex w-full justify-center">
        <RecentPosts />
      </div>
    </div>
  );
}
