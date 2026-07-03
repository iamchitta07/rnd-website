"use client";
import { ProjectCardProps } from "@/types";
import { useActionState } from "react";
import { InputDemo } from "@/_components/InputField";
import { ContentBox } from "@/_components/ContentBox";
import { Button } from "@/components/ui/button";
import { ProjectSubmitErrorProps, updateProject } from "@/utils/admin/projects";
import { Spinner } from "@/components/ui/spinner";

const initialState: ProjectSubmitErrorProps = {
  title: null,
  projectLink: null,
  content: null,
};

export default function EditProjectFormPage({ project }: { project: ProjectCardProps }) {
  const [state, action, isPending] = useActionState(updateProject, initialState);
  return (
    <form className="w-full flex flex-col items-center gap-3 mb-10 mt-20 lg:mt-10" action={action}>
      <input type="hidden" name="id" value={project.id} />
      <InputDemo
        id="title"
        title="Title"
        type="text"
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
        placeHolder="Enter title of the project"
        defaultValue={project.title}
      />
      <InputDemo
        id="project-link"
        title="Project Link"
        type="text"
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
        placeHolder="Enter project link"
        defaultValue={project.link}
      />
      <ContentBox placeHolder="Enter details of the project" defaultValue={project.content} />
      <div className="flex gap-5">
        <Button
          className="px-4 py-4 md:py-5 text-sm md:text-xl"
          name="intent"
          value="update"
          type="submit"
        >
          {isPending && <Spinner data-icon="inline-start" className="ml-10" />}
          Update Changes
        </Button>
        <Button
          className="px-4 py-4 md:py-5 text-sm md:text-xl"
          variant="destructive"
          name="intent"
          value="delete"
          type="submit"
        >
          {isPending && <Spinner data-icon="inline-start" className="ml-10" />}
          Delete Project
        </Button>
      </div>
    </form>
  );
}
