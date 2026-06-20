"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InputDemo } from "../_components/InputField";
import { ContentBox } from "../_components/ContentBox";

const Home = () => {
  const router = useRouter();
  return (
    <div className="w-full mt-12 lg:mt-16 px-5 lg:px-20 flex-1">
      <div className="hidden md:block">
        <Button
          className="flex gap-0 py-0.5 px-3 rounded-full bg-white text-black"
          onClick={() => router.back()}
        >
          <ChevronLeft />
          Back
        </Button>
      </div>
      <div className="w-full flex flex-col items-center gap-3 mb-10 mt-20 lg:mt-10">
        <InputDemo
          id="title"
          title="Title"
          type="text"
          className="w-75 md:w-sm"
          placeHolder="Enter title of the project"
        />
        <InputDemo
          id="project-link"
          title="Project Link"
          type="text"
          className="w-75 md:w-sm"
          placeHolder="Enter project link"
        />
        <ContentBox placeHolder="Enter details of the project" />
        <Button className="px-10 py-5 md:py-6 text-lg md:text-xl">Save Project</Button>
      </div>
    </div>
  );
};

export default Home;
