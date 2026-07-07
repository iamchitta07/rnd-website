import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { formatMyDate } from "@/utils/functions";
import { getEvent } from "@/utils/admin/events";
import { Suspense } from "react";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const event = await getEvent((await params).slug);
  if (!event) {
    notFound();
  }
  return {
    title: event.event_title + " | CCA RnD",
    description: event.event_description,
  };
};

async function GetEvent({ slug }: { slug: string }) {
  const event = await getEvent(slug);
  if (!event) {
    notFound();
  }
  const date = event.edited_date === null ? event.published_date : event.edited_date;
  let inFormat = "Published on ";
  const eventTime = formatMyDate(event.event_date);
  inFormat += new Intl.DateTimeFormat("en-GB").format(date).replace(/\//g, ".");
  const content = event.event_description;
  content.replace(/\n/g, "<br/>");
  return (
    <div className="w-full flex flex-col items-center gap-3 mb-10 mt-10">
      <div className="flex flex-col gap-2 rounded-lg w-75 md:w-lg text-card-foreground shadow-sm">
        <div className="relative w-full h-auto overflow-hidden border border-white bg-muted flex items-center justify-center">
          <Image
            src={event.poster_image}
            alt="Preview"
            width={800} // 1. Set this to the maximum width the image will ever be
            height={450} // 2. Set the original aspect ratio height (Next.js needs this as a baseline)
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="w-full h-full"
          />
        </div>
        <div className="text-start text-white">
          <h1 className="text-white/70 text-sm md:text-lg">{inFormat}</h1>
          <h1 className="flex gap-2 text-2xl md:text-5xl mb-2">{event.event_title}</h1>
          <h1 className="flex gap-2 text-sm md:text-xl items-center">
            <MapPin className="size-5 md:size-8" /> {event.event_venue}
          </h1>
          <h1 className="flex gap-2 text-sm md:text-xl items-center mt-2">
            <Clock className="size-5 md:size-8" /> {eventTime}
          </h1>
          <h1
            className="flex gap-2 text-md md:text-xl text-justify mt-2 md:mt-5"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          ></h1>
        </div>
        <div className="w-full mt-5 mb-10 flex justify-center text-white">
          {event.event_link && (
            <Link
              href={event.event_link}
              target="_blank"
              className="w-40 md:w-50 bg-primary rounded-md py-3 md:py-3 text-sm md:text-lg cursor-pointer"
            >
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

const Home = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <div className="relative w-full mt-14 lg:mt-18 px-5 lg:px-20 flex-1 text-white flex flex-col text-center gap-2 items-center">
      <Suspense
        fallback={
          <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full min-h-screen -mt-14 -lg:mt-18">
            Loading...
          </h1>
        }
      >
        <GetEvent slug={slug} />
      </Suspense>
    </div>
  );
};

export default Home;
