import Link from "next/link";
import type { EventProps } from "@/types";
import Image from "next/image";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { getFormattedDate, getFormattedTime } from "@/utils/functions";
import classes from "./EventCard.module.css";

export default function EventCard({
  id,
  poster_image,
  event_title,
  event_venue,
  event_description,
  event_date,
}: EventProps) {
  const eventDate = getFormattedDate(event_date);
  const eventTime = getFormattedTime(event_date);
  const des = event_description.replace(/\n/g, "<br/>");
  return (
    <Link href={`/events/e/${id}`} className={classes.mainBox}>
      <div className={classes.imageClass}>
        <Image
          src={poster_image || "/placeholder-avatar.jpg"}
          width={400}
          height={450}
          alt={event_title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h1 className={classes.title}>{event_title}</h1>
      <h1 className={classes.eventDate}>
        <CalendarDays className={classes.icons} /> {eventDate}
      </h1>
      <div className="w-full flex justify-center gap-2 font-semibold">
        <h1 className={classes.timePlace}>
          <Clock className={classes.icons} /> {eventTime}{" "}
        </h1>
        <h1 className={classes.timePlace}>
          <MapPin className={classes.icons} /> {event_venue}{" "}
        </h1>
      </div>
      <h1 className={classes.content} dangerouslySetInnerHTML={{ __html: des }} />
    </Link>
  );
}
