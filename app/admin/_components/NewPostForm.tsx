"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useActionState } from "react";
import { ContentBox } from "@/_components/ContentBox";
import { InputDemo } from "@/_components/InputField";
import MediaUploader from "./Image-Video";
import { handlePostSubmit, type PostSubmitErrorProps } from "@/utils/admin/posts";

const intitalValue: PostSubmitErrorProps = {
  posters: null,
  title: null,
  comment: null,
};

const NewPostForm = () => {
  const [state, action, isPending] = useActionState(handlePostSubmit, intitalValue);
  return (
    <form className="w-full flex flex-col items-center gap-3 mb-10 mt-10" action={action}>
      <MediaUploader />
      <InputDemo
        id="title"
        title="Title"
        type="text"
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
        placeHolder="Enter title of the event"
      />
      <ContentBox placeHolder="Enter content of the event" />
      <Button className="px-10 py-5 md:py-6 text-lg md:text-xl" type="submit" disabled={isPending}>
        {isPending && <Spinner data-icon="inline-start" className="ml-10" />}
        {isPending ? "Saving..." : "Save Event"}
      </Button>
    </form>
  );
};
export default NewPostForm;
