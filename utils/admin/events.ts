"use server";
import type { EventProps } from "@/types";
import EventImage from "@/public/recent/event.webp";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import xss from "xss";

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
  const content = xss(formData.get("content") as string);
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
    published_date: new Date(2026, 0, 12),
    poster_image:
      "https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-15/620879050_18089219117031891_7487488322857290464_n.webp?_nc_cat=105&ig_cache_key=MzgxNDcxNzQwODgyNTM4MDEwMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=seA_IMQXbbEQ7kNvwEqVZhm&_nc_oc=Adq3U3el-fayxf9IhdFr_UiDTnk9o080kFw36cMDtgRMnjszESv6vxHc-krUS6N3PIQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=PuO4sgyYZMQZLO8r1BY9GA&_nc_ss=7a22e&oh=00_AQBYwtaCg5OWW09G5YsTpPTi1IBUddvppP8giJiYjP-xgg&oe=6A527B26",
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
    published_date: new Date(2026, 0, 15),
    poster_image:
      "https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-15/532291792_17844929838549872_5933588913672396524_n.webp?_nc_cat=103&ig_cache_key=MzY5NzM3MDA0NDAxNjA4MzgwMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=p7X4oNKwTvsQ7kNvwHD7MqM&_nc_oc=AdoSGKQO7RCfv55yU4-dq6P4EbwY5ZoxlI7Du5ommlehFXsDIyjRg6GwigD11LLWPQo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=w70-I_LnN8njDkPrifgRQA&_nc_ss=7a22e&oh=00_AQC0f1JZj1VbK5VnMlYXEWA1G1gHixmtV1B6t4RjYY3S9w&oe=6A5287E9",
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
    published_date: new Date(2025, 0, 15),
    poster_image:
      "https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-15/620879050_18089219117031891_7487488322857290464_n.webp?_nc_cat=105&ig_cache_key=MzgxNDcxNzQwODgyNTM4MDEwMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=seA_IMQXbbEQ7kNvwEqVZhm&_nc_oc=Adq3U3el-fayxf9IhdFr_UiDTnk9o080kFw36cMDtgRMnjszESv6vxHc-krUS6N3PIQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=PuO4sgyYZMQZLO8r1BY9GA&_nc_ss=7a22e&oh=00_AQBYwtaCg5OWW09G5YsTpPTi1IBUddvppP8giJiYjP-xgg&oe=6A527B26",
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
  published_date: new Date(2026, 0, 12),
  poster_image:
    "https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-15/620879050_18089219117031891_7487488322857290464_n.webp?_nc_cat=105&ig_cache_key=MzgxNDcxNzQwODgyNTM4MDEwMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=seA_IMQXbbEQ7kNvwEqVZhm&_nc_oc=Adq3U3el-fayxf9IhdFr_UiDTnk9o080kFw36cMDtgRMnjszESv6vxHc-krUS6N3PIQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=PuO4sgyYZMQZLO8r1BY9GA&_nc_ss=7a22e&oh=00_AQBYwtaCg5OWW09G5YsTpPTi1IBUddvppP8giJiYjP-xgg&oe=6A527B26",
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
    const content = xss(formData.get("content") as string);
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
