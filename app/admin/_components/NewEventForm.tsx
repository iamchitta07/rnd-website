"use client";

import { Button } from "@/components/ui/button";
import ImageUploader from "./ImageUploader";
import { InputDemo } from "@/_components/InputField";
import { DateTimePicker } from "./DateTimemPicker";
import { ContentBox } from "@/_components/ContentBox";
import { useActionState } from "react";
import { eventSubmitHandler, type EventSubmitErrorProps } from "@/utils/admin/events";
import { Spinner } from "@/components/ui/spinner";

const initialState: EventSubmitErrorProps = {
  image: null,
  title: null,
  venue: null,
  date: null,
  link: null,
  content: null,
};

const NewEventForm = () => {
  const [state, action, isPending] = useActionState(eventSubmitHandler, initialState);
  return (
    <form className="w-full flex flex-col items-center gap-3 mb-10 mt-10" action={action}>
      <ImageUploader />
      <InputDemo
        id="title"
        title="Title"
        type="text"
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
        placeHolder="Enter title of the event"
      />
      <InputDemo
        id="venue"
        title="Venue"
        type="text"
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
        placeHolder="Enter venue of the event"
      />
      <DateTimePicker />
      <InputDemo
        id="reg-link"
        title="Regitration Link"
        type="text"
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
        placeHolder="Enter registration"
      />
      <ContentBox placeHolder="Enter content of the event" />
      <Button className="px-10 py-5 md:py-6 text-lg md:text-xl" type="submit" disabled={isPending}>
        {isPending && <Spinner data-icon="inline-start" className="ml-10" />}
        {isPending ? "Saving..." : "Save Event"}
      </Button>
    </form>
  );
};

export default NewEventForm;
