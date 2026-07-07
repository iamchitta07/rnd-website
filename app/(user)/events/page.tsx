import EventCard from "../_components/EventCard";
import { EventProps } from "@/types";
import { getEvents } from "@/utils/admin/events";
import { Suspense } from "react";


async function GetEvents() {
  const events: EventProps[] = await getEvents();
  if (!events) {
    return (
      <h1 className="text-2xl font-bold text-white flex items-center justify-center w-full">
        No Event Found
      </h1>
    );
  }
  const showableEvents = events.filter((event) => event.deleted !== true);
  return (
    <div className="w-full mt-16 lg:mt-18 px-5 lg:px-20 flex flex-col items-center gap-2 md:gap-3 flex-1 mb-10">
      {showableEvents.length ? (
        <>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-5">
            Our Events
          </h1>
          <ul className="flex gap-2 flex-wrap justify-center">
            {showableEvents.map((e) => (
              <EventCard key={e.id} {...e} />
            ))}
          </ul>
        </>
      ) : (
        <h1 className="text-2xl font-bold text-white flex items-center justify-center w-full">
          No Event Found
        </h1>
      )}
    </div>
  );
}
const Home = async () => {
  return (
    <div className="relative min-h-screen flex flex-col w-full">
      <Suspense
        fallback={
          <h1 className="text-2xl font-bold text-white h-full flex items-center min-h-screen justify-center w-full">
            Loading...
          </h1>
        }
      >
        <GetEvents />
      </Suspense>
    </div>
  );
};

export default Home;
