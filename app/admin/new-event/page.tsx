"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageUploader from "../_components/ImageUploader";
import { InputDemo } from "../_components/InputField";
import { DateTimePicker } from "../_components/DateTimemPicker";
import { ContentBox } from "../_components/ContentBox";

const Home = () => {
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
        <ImageUploader />
        <InputDemo
          id="title"
          title="Title"
          type="text"
          className="w-75 md:w-sm"
          placeHolder="Enter title of the event"
        />
        <InputDemo
          id="venue"
          title="Venue"
          type="text"
          className="w-75 md:w-sm"
          placeHolder="Enter venue of the event"
        />
        <DateTimePicker />
        <InputDemo
          id="reg-link"
          title="Regitration Link"
          type="text"
          className="w-75 md:w-sm"
          placeHolder="Enter registration"
        />
        <ContentBox placeholder="Enter content of the event" />
        <Button className="px-10 py-5 md:py-6 text-lg md:text-xl">Save Event</Button>
      </div>
    </div>
  );
};

export default Home;
