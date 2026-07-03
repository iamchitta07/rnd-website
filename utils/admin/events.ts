"use server";
import type { EventProps } from "@/types";
import EventImage from "@/public/recent/event.webp";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export interface EventSubmitErrorProps {
  image: string | null;
  title: string | null;
  venue: string | null;
  date: Date | null;
  link: string | null;
  content: string | null;
}

export interface EventData {
  image: File | null;
  title: string;
  venue: string;
  date: Date;
  link: string;
  content: string;
}

function isValid(text: string) {
  return !text.trim().length;
}

export async function eventSubmitHandler(
  _prevState: EventSubmitErrorProps,
  formData: FormData,
): Promise<EventSubmitErrorProps> {
  // Working
  const image = formData.get("image") as File | null;
  const title = formData.get("title") as string;
  const venue = formData.get("venue") as string;
  const date = new Date(formData.get("date") as string);
  const link = formData.get("reg-link") as string;
  const content = formData.get("content") as string;
  const err: EventSubmitErrorProps = {
    image: null,
    title: null,
    venue: null,
    date: null,
    link: null,
    content: null,
  };

  if (!image) {
    err.image = "Image is required";
  }
  if (isValid(title)) {
    err.title = "Title is required";
  }
  if (isValid(venue)) {
    err.venue = "Venue is required";
  }
  if (isValid(link)) {
    err.link = "Link is required";
  }
  if (isValid(content)) {
    err.content = "Content is required";
  }

  if (Object.values(err).some((value) => value !== null)) {
    return err;
  }
  const data: EventData = {
    image,
    title,
    venue,
    date,
    link,
    content,
  };
  console.log(data);

  // Saving Image
  /**
    try{
        const imageUrl = await saveImage(image);
        await storeEvent(data);
    } catch(error){
     console.error("Error saving image:", (error as Error).message);

    }
   */
  new Promise((res) => setTimeout(res, 2000));
  revalidatePath("/admin/events");
  redirect("/admin/events");
}

const dummyPosters: EventProps[] = [
  {
    id: 1,
    publisher_id: 1,
    pulished_date: new Date(2026, 0, 12),
    poster_image: EventImage,
    event_title: "Cannevent 3.0",
    event_venue: "MAB First Floor",
    event_date: new Date(2026, 0, 15),
    event_link: "www.google.com",
    event_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    deleted: false,
    editor_id: null,
    edited_date: null,
  },
  {
    id: 2,
    publisher_id: 2,
    pulished_date: new Date(2026, 0, 15),
    poster_image: EventImage,
    event_title: "MLEff 3.0",
    event_venue: "NAB 201",
    event_date: new Date(2026, 0, 18),
    event_link: "www.google.com",
    event_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    editor_id: 1,
    edited_date: new Date(2026, 0, 16),
    deleted: false,
  },
  {
    id: 3,
    publisher_id: 3,
    pulished_date: new Date(2025, 0, 15),
    poster_image: EventImage,
    event_title: "MLEff 2.0",
    event_venue: "NAB 201",
    event_date: new Date(2025, 0, 18),
    event_link: null,
    event_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    editor_id: 2,
    edited_date: new Date(2025, 0, 16),
    deleted: true,
  },
];

export async function getEvents(): Promise<EventProps[]> {
  // TODO: Implement get events logic
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return dummyPosters;
}

const example: EventProps = {
  id: 1,
  publisher_id: 1,
  pulished_date: new Date(2026, 0, 12),
  poster_image: EventImage,
  event_title: "Cannevent 3.0",
  event_venue: "MAB First Floor",
  event_date: new Date(2026, 0, 15, 12, 0, 0),
  event_link: "https://www.google.com",
  event_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  deleted: false,
  editor_id: null,
  edited_date: null,
};

export async function getEvent(id: string): Promise<EventProps | undefined> {
  // TODO: Implement fetch event logic
  return new Promise((resolve) => setTimeout(() => resolve(example), 2000));
}

export async function updateEvent(
  _prev: EventSubmitErrorProps,
  formData: FormData,
): Promise<EventSubmitErrorProps> {
  const intent = formData.get("intent") as string; // Detects which button was clicked
  const id = formData.get("id") as string;

  if (intent === "delete") {
    // TODO: Implement delete event logic
    console.log("Event Deleted!");
  } else {
    // TODO: Implement update event logic
    const image = formData.get("image") as File | null;
    const title = formData.get("title") as string;
    const venue = formData.get("venue") as string;
    const date = new Date(formData.get("date") as string);
    const link = formData.get("reg-link") as string;
    const content = formData.get("content") as string;
    const err: EventSubmitErrorProps = {
      image: null,
      title: null,
      venue: null,
      date: null,
      link: null,
      content: null,
    };

    if (!image) {
      err.image = "Image is required";
    }
    if (isValid(title)) {
      err.title = "Title is required";
    }
    if (isValid(venue)) {
      err.venue = "Venue is required";
    }
    if (isValid(link)) {
      err.link = "Link is required";
    }
    if (isValid(content)) {
      err.content = "Content is required";
    }

    if (Object.values(err).some((value) => value !== null)) {
      return err;
    }
    const data: EventData = {
      image,
      title,
      venue,
      date,
      link,
      content,
    };
    console.log("Event Updated!", data);

    // Saving Image
    /**
    try{
        const imageUrl = await saveImage(image);
        await storeEvent(data);
    } catch(error){
     console.error("Error saving image:", (error as Error).message);

    }
   */
  }

  new Promise((res) => setTimeout(res, 2000));
  revalidatePath("/admin/events");
  redirect("/admin/events");
}
