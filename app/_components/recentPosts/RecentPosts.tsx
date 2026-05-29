import RecentPostCard from "./RecentPostCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { RecentPostsProps } from "./RecentPostCard";

const recentPosts: RecentPostsProps[] = [
  {
    type: "image",
    mediaSrc: "/recent/blog.webp",
    date: "May 28, 2026",
    title: "MLEFICIENT 3.0",
    description:
      "We are pleased to present MLEFICIENT 3.0 - 2026, proudly organized by the R&D Cell, CCA. This two-day hands-on workshop is designed to introduce students to the fundamentals and current trends in Artificial Intelligence and Machine Learning. The sessions will focus on practical learning, real-world applications, and interactive projects that help participants build a strong foundation in these trending technologies.",
  },
  {
    type: "video",
    mediaSrc: "/recent/GYANETRON.mp4",
    date: "May 30, 2026",
    title: "The Infinite Energy Myth!",
    description:
      "A perpetual motion machine is the engineering dream of a device that runs forever without any fuel source. It sounds perfect, but it breaks the fundamental laws of the universe-specifically, Thermodynamics.",
  },
  {
    type: "image",
    mediaSrc: "/recent/blog.webp",
    date: "May 28, 2026",
    title: "MLEFICIENT 3.0",
    description:
      "We are pleased to present MLEFICIENT 3.0 - 2026, proudly organized by the R&D Cell, CCA. This two-day hands-on workshop is designed to introduce students to the fundamentals and current trends in Artificial Intelligence and Machine Learning. The sessions will focus on practical learning, real-world applications, and interactive projects that help participants build a strong foundation in these trending technologies.",
  },
  {
    type: "video",
    mediaSrc: "/recent/GYANETRON.mp4",
    date: "May 30, 2026",
    title: "The Infinite Energy Myth!",
    description:
      "A perpetual motion machine is the engineering dream of a device that runs forever without any fuel source. It sounds perfect, but it breaks the fundamental laws of the universe-specifically, Thermodynamics.",
  },
  {
    type: "image",
    mediaSrc: "/recent/blog.webp",
    date: "May 28, 2026",
    title: "MLEFICIENT 3.0",
    description:
      "We are pleased to present MLEFICIENT 3.0 - 2026, proudly organized by the R&D Cell, CCA. This two-day hands-on workshop is designed to introduce students to the fundamentals and current trends in Artificial Intelligence and Machine Learning. The sessions will focus on practical learning, real-world applications, and interactive projects that help participants build a strong foundation in these trending technologies.",
  },
];

export function RecentPosts() {
  return (
    <Carousel className="w-[80%] py-30">
      <h1 className="text-4xl md:text-6xl text-center mb-5">Our Recent Posts</h1>
      <CarouselContent className="-ml-1">
        {recentPosts.map((e, index) => (
          <CarouselItem key={index} className="flex justify-center gap-2 md:basis-1/2 lg:basis-1/3">
            <RecentPostCard
              type={e.type}
              mediaSrc={e.mediaSrc}
              description={e.description}
              title={e.title}
              date={e.date}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-white/80 text-black hidden md:block" />
      <CarouselNext className="bg-white/80 text-black hidden md:block" />
    </Carousel>
  );
}
