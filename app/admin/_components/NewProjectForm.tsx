"use client";

import { Button } from "@/components/ui/button";
import { InputDemo } from "@/_components/InputField";
import { ContentBox } from "@/_components/ContentBox";
import { useActionState } from "react";
import { type ProjectSubmitErrorProps, projectSubmitHandler } from "@/utils/admin/projects";
import { Spinner } from "@/components/ui/spinner";

const initialState: ProjectSubmitErrorProps = {
  title: null,
  projectLink: null,
  content: null,
};

const NewPostForm = () => {
  const [state, action, isPending] = useActionState(projectSubmitHandler, initialState);
  return (
    <form className="w-full flex flex-col items-center gap-3 mb-10 mt-20 lg:mt-10" action={action}>
      <InputDemo
        id="title"
        title="Title"
        type="text"
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
        placeHolder="Enter title of the project"
      />
      <InputDemo
        id="project-link"
        title="Project Link"
        type="text"
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
        placeHolder="Enter project link"
      />
      <ContentBox placeHolder="Enter details of the project" />
      <Button className="px-10 py-5 md:py-6 text-lg md:text-xl" type="submit" disabled={isPending}>
        {isPending && <Spinner data-icon="inline-start" className="ml-10" />}
        {isPending ? "Saving..." : "Save Project"}
      </Button>
    </form>
  );
};

export default NewPostForm;
