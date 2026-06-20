"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageVideoUploader from "../../_components/ImageVideoUploader";
import { InputDemo } from "../../_components/InputField";
import { ContentBox } from "../../_components/ContentBox";

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
      <div className="w-full flex flex-col items-center gap-3 mb-10">
        <ImageVideoUploader />
        <InputDemo
          id="title"
          title="Title"
          type="text"
          className="w-75 md:w-sm"
          placeHolder="Enter title of the blog"
        />
        <ContentBox placeHolder="Enter content of the blog" />
        <Button className="px-10 py-5 md:py-6 text-lg md:text-xl">Save Blog</Button>
      </div>
    </div>
  );
};

export default Home;
