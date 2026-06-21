import type { EventProps } from "@/types";
import EventImage from "@/public/recent/event.webp";
import SearchBarEvent from "../../_components/SearchBarEvent";
import StickyAddButton from "../../_components/AddButton";
import EventCard from "../../_components/EventCard";
const dummyPosters: EventProps[] = [
  {
    id: 1,
    publisher_id: 1,
    pulished_date: new Date(2026, 0, 12),
    poster_image: EventImage,
    event_title: "Cannevent 3.0",
    event_venue: "MAB First Floor",
    event_date: new Date(2026, 0, 15),
    event_link: "www.google.com",
    event_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    deleted: false,
    editor_id: null,
    edited_date: null,
  },
  {
    id: 2,
    publisher_id: 2,
    pulished_date: new Date(2026, 0, 15),
    poster_image: EventImage,
    event_title: "MLEff 3.0",
    event_venue: "NAB 201",
    event_date: new Date(2026, 0, 18),
    event_link: "www.google.com",
    event_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    editor_id: 1,
    edited_date: new Date(2026, 0, 16),
    deleted: false,
  },
  {
    id: 3,
    publisher_id: 3,
    pulished_date: new Date(2025, 0, 15),
    poster_image: EventImage,
    event_title: "MLEff 2.0",
    event_venue: "NAB 201",
    event_date: new Date(2025, 0, 18),
    event_link: null,
    event_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    editor_id: 2,
    edited_date: new Date(2025, 0, 16),
    deleted: true,
  },
];

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="w-full mt-20 lg:mt-18 px-5 lg:px-20 flex flex-col items-center gap-4 flex-1">
        <SearchBarEvent data={dummyPosters} />
        <ul className="w-full flex flex-col gap-2 md:gap-3 items-center ">
          {dummyPosters.map((e) => (
            // <ProjectCard key={e.id} {...e} />
            <EventCard key={e.id} {...e} />

          ))}
        </ul>
      </div>
      <StickyAddButton dir="new-event" />
    </div>
  );
};

export default Home;
