"use server";

import { ProjectCardProps } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export interface ProjectSubmitErrorProps {
  title: string | null;
  projectLink: string | null;
  content: string | null;
}
export interface ProjectDataProps {
  title: string;
  projectLink: string;
  content: string;
}

function isNotValid(text: string) {
  return text.trim() === "";
}

export async function projectSubmitHandler(
  _prevState: ProjectSubmitErrorProps,
  formData: FormData,
): Promise<ProjectSubmitErrorProps> {
  // Working
  const title = formData.get("title") as string;
  const projectLink = formData.get("project-link") as string;
  const content = formData.get("content") as string;

  const errors: ProjectSubmitErrorProps = {
    title: isNotValid(title) ? "Title is required" : null,
    projectLink: isNotValid(projectLink) ? "Project link is required" : null,
    content: isNotValid(content) ? "Content is required" : null,
  };

  if (errors.title || errors.projectLink || errors.content) {
    return errors;
  }

  const projectData: ProjectDataProps = {
    title,
    projectLink,
    content,
  };
  console.log(projectData);

  // TODO: Add project to database

  new Promise((res) => setTimeout(res, 2000));
  revalidatePath("/admin/projects");
  redirect("/admin/projects");
}

const example: ProjectCardProps = {
  id: "1",
  title: "RnD Website",
  link: "https://www.github.com/iamchitta07/rnd-website",
  author: "Chittajit Nath",
  date: new Date(2024, 10, 23, 11, 12, 30),
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia, nunc et scelerisque semper, augue est sagittis est, eu dapibus lacus lorem sit amet lorem. Nunc gravida a mi ac posuere. Vestibulum convallis tempor bibendum. Suspendisse in tortor eu diam vulputate euismod. Nunc bibendum dictum leo, non tempor libero efficitur vel. Nullam scelerisque sodales eros blandit ultrices. Phasellus quis auctor mauris. Pellentesque rutrum magna non tortor mollis blandit. Donec eget finibus lacus. Vestibulum aliquam faucibus urna ut semper. Integer sit amet tortor dictum, euismod quam et, rutrum lacus. Nunc et est convallis ligula rutrum venenatis. Pellentesque ac gravida tellus.\nProin felis elit, aliquam id mollis a, vestibulum sed felis. Maecenas convallis lorem vitae enim tempus tristique. Duis massa velit, ullamcorper vel euismod eget, pharetra fringilla ipsum. Phasellus aliquet turpis a tempus volutpat. Etiam eget arcu nibh. Aenean auctor arcu massa, non ornare turpis vulputate a. Sed feugiat ultricies dolor, eget auctor sapien commodo sed. Proin ultricies mauris aliquet purus ultricies laoreet. Etiam dignissim orci id est congue consequat et sed magna. Suspendisse a tortor eu sem porttitor commodo. Sed gravida lacus quis interdum tristique.\nNulla quis ex vitae eros commodo ullamcorper eu et tortor. Donec at sodales velit. Sed quis maximus metus. Donec nec mi justo. Maecenas eleifend placerat ex in semper. Etiam consectetur odio ante, non venenatis nibh imperdiet eget. Integer tempor id felis eget viverra. Suspendisse potenti. Nullam egestas orci ante, imperdiet malesuada orci suscipit sit amet. Sed rutrum at nulla quis consectetur.\n\nMauris dignissim consequat magna sit amet iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Phasellus quis ante dignissim, euismod elit vestibulum, posuere ex. Nam ipsum dui, aliquam sed egestas malesuada, imperdiet sed tortor. Aliquam magna tortor, consequat nec euismod nec, varius at augue. Morbi non justo neque. Proin nec tincidunt purus, tempor eleifend metus. Nam posuere blandit accumsan. Maecenas mattis congue sem, vehicula ultrices mi imperdiet id. Donec interdum aliquam massa, suscipit posuere neque semper eu.\nPellentesque ut finibus massa, sed gravida purus. Suspendisse quam lacus, lobortis id odio ac, aliquam tincidunt quam. Nam orci risus, tincidunt quis nisl ut, faucibus pellentesque metus. Donec finibus non lorem ut iaculis. Suspendisse ut odio quis ligula sodales sagittis. Donec malesuada augue vitae nunc congue, et consectetur purus maximus. Sed sit amet felis neque.\nNulla a molestie dui. Donec mollis orci nec orci porta blandit. Phasellus ultrices in felis vel vulputate. Vestibulum porta aliquam ipsum non molestie. Pellentesque ultricies sit amet dolor ut rhoncus. Maecenas vulputate sapien vel dolor sodales commodo. Sed egestas eleifend posuere. In cursus neque quis felis finibus faucibus. Cras nunc dolor, placerat a ligula sed, iaculis accumsan nibh. Proin turpis metus, egestas quis auctor nec, faucibus vel elit. Aliquam erat volutpat.",
};

export async function getProject(id: string): Promise<ProjectCardProps | undefined> {
  // Fetch from DB
  return new Promise((res) =>
    setTimeout(() => {
      res(example);
    }, 2000),
  );
}

const mockDatabaseItems: ProjectCardProps[] = [
  {
    id: "1",
    title: "RnD Web Site",
    author: "Chittajit Nath",
    link: "github.com/iamchitta07/rnd-website",
    date: new Date(2024, 10, 20, 17, 43, 40),
  },
  {
    id: "2",
    title: "AI Judge",
    author: "Arkajit Kayal",
    date: new Date(2025, 9, 20, 7, 32, 15),
    link: "gitlab.com/arkajit/ai-judge",
  },
  {
    id: "3",
    title: "AI Interview",
    author: "Vamshidhar Reddy",
    date: new Date(2020, 10, 15, 12, 30, 20),
    link: "github.com/vamshidhar/ai-interview",
  },
];

export async function getProjects(): Promise<ProjectCardProps[]> {
  // Fetch from DB
  return new Promise((res) =>
    setTimeout(() => {
      res(mockDatabaseItems);
    }, 2000),
  );
}

export async function updateProject(
  _prev: ProjectSubmitErrorProps,
  formData: FormData,
): Promise<ProjectSubmitErrorProps> {
  const intent = formData.get("intent") as string; // Detects which button was clicked
  const id = formData.get("id") as string;

  if (intent === "delete") {
    // TODO: Implement delete event logic
    console.log("Project Deleted!");
  } else {
    // TODO: Implement update event logic
    const title = formData.get("title") as string;
    const link = formData.get("project-link") as string;
    const content = formData.get("content") as string;
    const err: ProjectSubmitErrorProps = {
      title: null,
      projectLink: null,
      content: null,
    };

    if (isNotValid(title)) {
      err.title = "Title is required";
    }
    if (isNotValid(link)) {
      err.projectLink = "Project link is required";
    }
    if (isNotValid(content)) {
      err.content = "Content is required";
    }

    if (Object.values(err).some((value) => value !== null)) {
      return err;
    }
    const data: ProjectDataProps = {
      title,
      projectLink: link,
      content,
    };
    console.log("Project Updated!", data);

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
  revalidatePath("/admin/projects");
  redirect("/admin/projects");
}
