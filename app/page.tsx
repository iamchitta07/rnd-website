import AboutUs from "./_components/aboutUs/AboutUs";
import Carousel from "./_components/carousel/centerCarousel/Carousel";

export default function Home() {
  return (
    <div className="text-white">
      <Carousel
        images={[
          { src: "/activities/one.webp", text: "Conjecture-2025" },
          { src: "/activities/two.webp", text: "Aarohan-2025" },
          { src: "/activities/three.webp", text: "Aarohan-2025 Opening Ceremony" },
        ]}
        interval={5000}
      />
      <AboutUs />
    </div>
  );
}
