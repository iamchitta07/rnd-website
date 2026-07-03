import BackButton from "@/_components/BackButton";
import FormPage from "../../../_components/EditEventFormPage";
import { getEvent } from "@/utils/admin/events";
import { Suspense } from "react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEvent(slug);
  return {
    title: (event ? `${event.event_title} | Edit` : "Edit Event") + " | Admin",
    description: event ? `Edit ${event.event_description}` : "Edit an event",
  };
}

const Home = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const event = await getEvent(slug);
  return (
    <div className="w-full mt-14 lg:mt-16 px-5 lg:px-20">
      <BackButton />
      <Suspense
        fallback={
          <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full">
            Loading...
          </h1>
        }
      >
        {event ? (
          <FormPage event={event} />
        ) : (
          <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full">
            Sorry! No Event found
          </h1>
        )}
      </Suspense>
    </div>
  );
};

export default Home;
