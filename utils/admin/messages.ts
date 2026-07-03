"use server";

import { MessageProps } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const messages: MessageProps[] = [
  {
    id: 1,
    name: "Chittajit Nath",
    phone_number: "6295068732",
    mail: "nathchittajit8@gmail.com",
    dept: "CSE",
    year: "3rd",
    domain_interested: "AI/ML",
    comment: "I have lot of interest in this domain",
    read: false,
    date: new Date(2026, 5, 13, 12, 30, 30),
  },
  {
    id: 2,
    name: "Rana Ghosh",
    phone_number: "6295068874",
    mail: "ranaghosh@gmail.com",
    dept: "ME",
    year: "3rd",
    domain_interested: "Mechatronics",
    comment: "I have lot of interest in this domain",
    read: true,
    date: new Date(2026, 4, 13, 12, 30, 39),
  },
];

export async function getMessages(): Promise<MessageProps[]> {
  // TODO: Implement message fetching logic
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(messages);
    }, 2000);
  });
}

const example: MessageProps = {
  id: 1,
  name: "Chittajit Nath",
  phone_number: "6295068732",
  mail: "nathchittajit8@gmail.com",
  dept: "CSE",
  year: "3rd",
  domain_interested: "AI/ML",
  comment: "I have lot of interest in this domain",
  read: false,
  date: new Date(2026, 5, 13, 12, 30, 30),
};

export async function getMessage(id: number): Promise<MessageProps | undefined> {
  // TODO: Implement message fetching logic
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(example);
    }, 2000);
  });
}

export async function messageAction(_prevState: null, formdata: FormData): Promise<null> {
  const id = formdata.get("id") as string;
  const action = formdata.get("action") as string;
  if (action === "delete") {
    // TODO: Implement message deletion logic
    console.log("Message Deleted!");
  } else {
    // TODO: Implement message action logic
    console.log("Message Action!");
  }

  revalidatePath("/admin/messages");
  redirect("/admin/messages");
}
