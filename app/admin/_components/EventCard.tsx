import type { EventProps } from "@/types";
import Link from "next/link";
import Image from "next/image";

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
  return (
    <Link
      href={link}
      className="w-75 md:w-xl xl:w-2xl h-30 md:h-50 bg-slate-700 rounded-sm md:rounded-md flex items-center pl-2 pr-3 md:pr-4 gap-2 md:gap-4 overflow-hidden"
    >
      {/* FIXED: Added flex-shrink-0, set an appropriate height/width constrained to the card */}
      <div className="relative shrink-0 w-24 sm:w-32 md:w-44 h-[85%] aspect-video bg-gray-100 overflow-hidden">
        <Image
          src={poster_image}
          alt={event_title}
          fill
          sizes="(max-width: 768px) 150px, 200px" // Updated sizes match the actual rendered dimensions better
          className="object-cover"
          priority // Recommended for card lists/above-the-fold content
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 min-w-0 h-full py-2 md:py-3 flex flex-col justify-center">
        {deleted === false ? (
          <h1 className="text-sm/6 md:text-2xl/6 font-semibold text-white truncate">
            {event_title}
          </h1>
        ) : (
          <div className="w-full flex justify-between items-center gap-2">
            <h1 className="text-sm/6 md:text-2xl/6 font-semibold text-white truncate">
              {event_title}
            </h1>
            <span className="text-[10px] md:text-sm text-red-400 italic font-medium shrink-0">
              Deleted
            </span>
          </div>
        )}
        <h2 className="text-white text-xs md:text-sm mt-0.5">{inFormat}</h2>
        <h3 className="italic text-xs md:text-sm text-slate-300">{name}</h3>
        <p className="text-[10px] md:text-xs text-slate-200 line-clamp-2 md:line-clamp-4 text-justify mt-1 leading-relaxed">
          {event_description}
        </p>
      </div>
    </Link>
  );
};

export default EventCard;
