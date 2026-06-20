"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InputDemo } from "../../../_components/InputField";
import { ContentBox } from "../../../_components/ContentBox";
import { ProjectCardProps } from "@/types";

const example: ProjectCardProps = {
  id: "1",
  title: "RnD Website",
  link: "https://www.github.com/iammchitta07/rnd-website",
  author: "Chittajit Nath",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia, nunc et scelerisque semper, augue est sagittis est, eu dapibus lacus lorem sit amet lorem. Nunc gravida a mi ac posuere. Vestibulum convallis tempor bibendum. Suspendisse in tortor eu diam vulputate euismod. Nunc bibendum dictum leo, non tempor libero efficitur vel. Nullam scelerisque sodales eros blandit ultrices. Phasellus quis auctor mauris. Pellentesque rutrum magna non tortor mollis blandit. Donec eget finibus lacus. Vestibulum aliquam faucibus urna ut semper. Integer sit amet tortor dictum, euismod quam et, rutrum lacus. Nunc et est convallis ligula rutrum venenatis. Pellentesque ac gravida tellus.\nProin felis elit, aliquam id mollis a, vestibulum sed felis. Maecenas convallis lorem vitae enim tempus tristique. Duis massa velit, ullamcorper vel euismod eget, pharetra fringilla ipsum. Phasellus aliquet turpis a tempus volutpat. Etiam eget arcu nibh. Aenean auctor arcu massa, non ornare turpis vulputate a. Sed feugiat ultricies dolor, eget auctor sapien commodo sed. Proin ultricies mauris aliquet purus ultricies laoreet. Etiam dignissim orci id est congue consequat et sed magna. Suspendisse a tortor eu sem porttitor commodo. Sed gravida lacus quis interdum tristique.\nNulla quis ex vitae eros commodo ullamcorper eu et tortor. Donec at sodales velit. Sed quis maximus metus. Donec nec mi justo. Maecenas eleifend placerat ex in semper. Etiam consectetur odio ante, non venenatis nibh imperdiet eget. Integer tempor id felis eget viverra. Suspendisse potenti. Nullam egestas orci ante, imperdiet malesuada orci suscipit sit amet. Sed rutrum at nulla quis consectetur.\n\nMauris dignissim consequat magna sit amet iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Phasellus quis ante dignissim, euismod elit vestibulum, posuere ex. Nam ipsum dui, aliquam sed egestas malesuada, imperdiet sed tortor. Aliquam magna tortor, consequat nec euismod nec, varius at augue. Morbi non justo neque. Proin nec tincidunt purus, tempor eleifend metus. Nam posuere blandit accumsan. Maecenas mattis congue sem, vehicula ultrices mi imperdiet id. Donec interdum aliquam massa, suscipit posuere neque semper eu.\nPellentesque ut finibus massa, sed gravida purus. Suspendisse quam lacus, lobortis id odio ac, aliquam tincidunt quam. Nam orci risus, tincidunt quis nisl ut, faucibus pellentesque metus. Donec finibus non lorem ut iaculis. Suspendisse ut odio quis ligula sodales sagittis. Donec malesuada augue vitae nunc congue, et consectetur purus maximus. Sed sit amet felis neque.\nNulla a molestie dui. Donec mollis orci nec orci porta blandit. Phasellus ultrices in felis vel vulputate. Vestibulum porta aliquam ipsum non molestie. Pellentesque ultricies sit amet dolor ut rhoncus. Maecenas vulputate sapien vel dolor sodales commodo. Sed egestas eleifend posuere. In cursus neque quis felis finibus faucibus. Cras nunc dolor, placerat a ligula sed, iaculis accumsan nibh. Proin turpis metus, egestas quis auctor nec, faucibus vel elit. Aliquam erat volutpat.",
};

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
          value={example.title}
        />
        <InputDemo
          id="project-link"
          title="Project Link"
          type="text"
          className="w-75 md:w-sm"
          placeHolder="Enter project link"
          value={example.link}
        />
        <ContentBox placeHolder="Enter details of the project" value={example.content} />
        <div className="flex gap-5">
          <Button className="px-7 py-5 md:py-5 text-lg md:text-xl">Update Changes</Button>
          <Button className="px-7 py-5 md:py-5 text-lg md:text-xl bg-red-600/80">
            Delete Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
