"use client";
import type { EventProps } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { useIsMobile } from "@/utils/functions";

const EventCard = ({
  id,
  poster_image,
  event_title,
  event_description,
  pulished_date,
  publisher_id,
  edited_date,
  editor_id,
  deleted,
}: EventProps) => {
  const link = `/admin/events/${id}`;
  const date = edited_date === null ? pulished_date : edited_date;
  let inFormat = edited_date === null ? "Published on " : deleted ? "Deleted on " : "Edited on ";
  inFormat += new Intl.DateTimeFormat("en-GB").format(date).replace(/\//g, ".");
  let name = edited_date === null ? "Published by " : deleted ? "Deleted by " : "Edited by ";
  name += editor_id === null ? publisher_id : editor_id;
  const isMobile = useIsMobile();
  const imageHt = isMobile ? 100 : 180;
  return (
    <Link
      href={link}
      className="w-75 md:w-xl h-30 md:h-50 bg-slate-700 rounded-sm md:rounded-md flex items-center pl-2 pr-3 md:pr-4 gap-2 md:gap-4"
    >
      <Image src={poster_image} alt={event_title} height={imageHt} className="block" />
      <div className="h-30 md:h-50 py-2 md:py-3">
        {deleted === false ? (
          <h1 className="text-sm/6 md:text-2xl/6 text-white">{event_title}</h1>
        ) : (
          <div className="w-full flex justify-between">
            <h1 className="text-sm/6 md:text-2xl/6 text-white">{event_title}</h1>
            <h1 className="text-[10px] md:text-md text-red-500 italic">Deleted</h1>
          </div>
        )}
        <h1 className="text-white text-xs md:text-md/loose">{inFormat}</h1>
        <h1 className="italic text-xs md:text-md text-white">{name}</h1>
        <h1 className="text-[8px] md:text-xs text-white line-clamp-4 md:line-clamp-6 text-justify">
          {event_description}
        </h1>
      </div>
    </Link>
  );
};

export default EventCard;
