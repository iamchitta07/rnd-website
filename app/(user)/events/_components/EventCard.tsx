import { notFound } from "next/navigation";
import ImageCarousel from "./ImageCarousel";
import classes from "./EventCard.module.css";
import type { EventProps } from "@/types";
import { getFormattedDate, getFormattedTime } from "@/utils/functions";
import BackDrop from "./BackDrop";
import Link from "next/link";

export default function BlogCard({
  event_title,
  event_venue,
  poster_image,
  event_description,
  event_date,
  event_link,
}: EventProps) {
  if (!poster_image) {
    notFound();
  }
  const date = getFormattedDate(event_date) + ", " + getFormattedTime(event_date);
  const des = event_description.replace(/\n/g, "<br/>");
  return (
    <>
      <BackDrop />
      <dialog open className={classes.outerBox}>
        <ImageCarousel IMAGE={poster_image} title={event_title} />
        <div className={classes.textBox}>
          <h1 className={classes.title}>{event_title}</h1>
          <h1 className={classes.date}>{date}</h1>
          <h1 className={classes.venue}>Venue: {event_venue}</h1>
          <p
            className={classes.description}
            dangerouslySetInnerHTML={{
              __html: des,
            }}
          />
          <div className="w-full flex justify-center text-white">
            {event_link && (
              <Link href={event_link} target="_blank" className={classes.register}>
                Register
              </Link>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
