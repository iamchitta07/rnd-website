"use client";
import { ContentBox } from "@/_components/ContentBox";
import { DateTimePicker } from "@/app/admin/_components/DateTimemPicker";
import ImageUploader from "@/app/admin/_components/ImageUploader";
import { InputDemo } from "@/_components/InputField";
import { EventProps } from "@/types";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { EventSubmitErrorProps, updateEvent } from "@/utils/admin/events";

const initialState: EventSubmitErrorProps = {
  image: null,
  title: null,
  venue: null,
  date: null,
  link: null,
  content: null,
};

export default function FormPage({ event }: { event: EventProps }) {
  const [state, action, isPending] = useActionState(updateEvent, initialState);
  return (
    <form className="w-full flex flex-col items-center gap-3 mb-10 mt-10" action={action}>
      <input type="hidden" name="id" value={event.id} />
      <ImageUploader imageUrl={event.poster_image} />
      <InputDemo
        id="title"
        title="Title"
        type="text"
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
        placeHolder="Enter title of the event"
        defaultValue={event.event_title}
      />
      <InputDemo
        id="venue"
        title="Venue"
        type="text"
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
        placeHolder="Enter venue of the event"
        defaultValue={event.event_venue}
      />
      <DateTimePicker defaultDate={event.event_date} />
      <InputDemo
        id="reg-link"
        title="Regitration Link"
        type="text"
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
        placeHolder="Enter registration"
        defaultValue={event.event_link !== null ? event.event_link : ""}
      />
      <ContentBox placeHolder="Enter content of the event" defaultValue={event.event_description} />
      <div className="flex gap-3 justify-center text-white">
        <Button
          className="px-5 md:px-10 py-5 md:py-6 text-lg md:text-xl"
          name="intent"
          value="update"
          type="submit"
          disabled={isPending}
        >
          {isPending && <Spinner data-icon="inline-start" className="ml-10" />}
          Update Event
        </Button>
        <Button
          variant="destructive"
          className="px-5 md:px-10 py-5 md:py-6 text-lg md:text-xl"
          name="intent"
          value="delete"
          type="submit"
          disabled={isPending}
        >
          {isPending && <Spinner data-icon="inline-start" className="ml-10" />}
          Delete Event
        </Button>
      </div>
    </form>
  );
}
