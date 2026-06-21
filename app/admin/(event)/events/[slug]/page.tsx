"use client";
import type { EventProps } from "@/types";
import EventImage from "@/public/recent/event.webp";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ChevronLeft, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { formatMyDate, useIsMobile } from "@/utils/functions";
import Link from "next/link";

const example: EventProps = {
  id: 1,
  publisher_id: 1,
  pulished_date: new Date(2026, 0, 12),
  poster_image: EventImage,
  event_title: "Cannevent 3.0",
  event_venue: "MAB First Floor",
  event_date: new Date(2026, 0, 15, 12, 0, 0),
  event_link: "https://www.google.com",
  event_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  deleted: false,
  editor_id: null,
  edited_date: null,
};

const Home = () => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const iconH = isMobile ? 20 : 30;
  const date = example.edited_date === null ? example.pulished_date : example.edited_date;
  let inFormat =
    example.edited_date === null ? "Published on " : example.deleted ? "Deleted on " : "Edited on ";
  const eventTime = formatMyDate(example.event_date);
  inFormat += new Intl.DateTimeFormat("en-GB").format(date).replace(/\//g, ".");
  let name =
    example.edited_date === null ? "Published by " : example.deleted ? "Deleted by " : "Edited by ";
  name += example.editor_id === null ? example.publisher_id : example.editor_id;
  return (
    <div className="relative w-full mt-12 lg:mt-18 px-5 lg:px-20 flex-1 text-white flex flex-col text-center gap-2 items-center">
      <div className="hidden md:block w-full absolute left-5 lg:left-20">
        <Button
          className="flex gap-0 py-0.5 px-3 rounded-full bg-white text-black"
          onClick={() => router.back()}
        >
          <ChevronLeft />
          Back
        </Button>
      </div>
      <div className="w-full flex flex-col items-center gap-3 mb-10 mt-10">
        <div className="flex flex-col gap-2 rounded-lg w-75 md:w-lg text-card-foreground shadow-sm">
          <div className="relative w-full h-auto overflow-hidden border border-white bg-muted flex items-center justify-center">
            <Image
              src={example.poster_image}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-start text-white">
            <h1 className="text-white/70 text-sm md:text-lg italic">{inFormat}</h1>
            <h1 className="flex gap-2 text-2xl md:text-5xl mb-2">{example.event_title}</h1>
            <h1 className="flex gap-2 text-sm md:text-xl items-center">
              <MapPin size={iconH} /> {example.event_venue}
            </h1>
            <h1 className="flex gap-2 text-sm md:text-xl items-center mt-2">
              <Clock size={iconH} /> {eventTime}
            </h1>
            <h1 className="flex gap-2 text-md md:text-xl text-justify mt-2 md:mt-5">
              {example.event_description}
            </h1>
          </div>
          <div className="w-full mt-5 mb-10 flex justify-center gap-5 text-white">
            {example.event_link && (
              <Link
                href={example.event_link}
                target="_blank"
                className="w-40 md:w-50 bg-primary rounded-md py-3 md:py-3 text-sm md:text-lg"
              >
                Register
              </Link>
            )}
            {example.deleted !== true && (
              <Link
                href={`/admin/edit-event/${example.id}`}
                className="w-40 md:w-50 bg-primary rounded-md py-3 md:py-3 text-sm md:text-lg"
              >
                Edit Event
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
