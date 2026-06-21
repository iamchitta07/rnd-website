"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageUploader from "../../../_components/ImageUploader";
import { InputDemo } from "../../../_components/InputField";
import { DateTimePicker } from "../../../_components/DateTimemPicker";
import { ContentBox } from "../../../_components/ContentBox";
import EventImage from "@/public/recent/event.webp";
import { EventProps } from "@/types";

const example: EventProps = {
  id: 1,
  publisher_id: 1,
  pulished_date: new Date(2026, 0, 12),
  poster_image: EventImage,
  event_title: "Cannevent 3.0",
  event_venue: "MAB First Floor",
  event_date: new Date(2026, 0, 15, 13, 0, 0),
  event_link: "https://www.google.com",
  event_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  deleted: false,
  editor_id: null,
  edited_date: null,
};

const Home = () => {
  const handelChange = () => {};
  const router = useRouter();
  return (
    <div className="w-full mt-12 lg:mt-16 px-5 lg:px-20">
      <div className="hidden md:block">
        <Button
          className="flex gap-0 py-0.5 px-3 rounded-full bg-white text-black"
          onClick={() => router.back()}
        >
          <ChevronLeft />
          Back
        </Button>
      </div>
      <div className="w-full flex flex-col items-center gap-3 mb-10 mt-10">
        <ImageUploader imageUrl={example.poster_image} />
        <InputDemo
          id="title"
          title="Title"
          type="text"
          className="w-75 md:w-sm"
          placeHolder="Enter title of the event"
          onChange={handelChange}
          value={example.event_title}
        />
        <InputDemo
          onChange={handelChange}
          id="venue"
          title="Venue"
          type="text"
          className="w-75 md:w-sm"
          placeHolder="Enter venue of the event"
          value={example.event_venue}
        />
        <DateTimePicker defaultDate={example.event_date} onChange={handelChange} />
        <InputDemo
          onChange={handelChange}
          id="reg-link"
          title="Regitration Link"
          type="text"
          className="w-75 md:w-sm"
          placeHolder="Enter registration"
          value={example.event_link !== null ? example.event_link : ""}
        />
        <ContentBox
          placeHolder="Enter content of the event"
          onChange={handelChange}
          value={example.event_description}
        />
        <div className="flex gap-3 justify-center">
          <Button className="px-5 md:px-10 py-5 md:py-6 text-lg md:text-xl">Save Event</Button>
          <Button className="px-5 md:px-10 py-5 md:py-6 text-lg md:text-xl bg-red-600/80">
            Delete Event
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
