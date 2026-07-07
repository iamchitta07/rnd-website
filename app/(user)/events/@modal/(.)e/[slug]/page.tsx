import { getEvent } from "@/utils/admin/events";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import EventCard from "../../../_components/EventCard";

export async function generateMetadata(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event || event.deleted) {
    notFound();
  }
  return {
    title: event.event_title,
    description: event.event_description,
  };
}

async function GetEvent({ slug }: { slug: string }) {
  const event = await getEvent(slug);
  if (!event || event.deleted) {
    notFound();
  }
  return <EventCard {...event} />;
}

export default async function Event({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="absolute inset-0 w-full h-screen flex justify-center items-center">
      <Suspense
        fallback={
          <h1 className="text-2xl font-bold min-h-screen text-white h-full flex items-center justify-center w-full z-20">
            Loading...
          </h1>
        }
      >
        <GetEvent slug={slug} />
      </Suspense>
    </div>
  );
}
