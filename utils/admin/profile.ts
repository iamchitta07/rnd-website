"use server";

import { revalidatePath } from "next/cache";
import type { ProfileProps } from "@/types";

export interface ProfileUpdateErrorProps {
  name: string | null;
}

export async function updateProfile(
  _prev: ProfileUpdateErrorProps,
  formData: FormData,
): Promise<ProfileUpdateErrorProps> {
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const dept = formData.get("dept") as string;
  const batch = formData.get("batch") as string;
  const insta = formData.get("insta") as string;
  const github = formData.get("github") as string;
  const facebook = formData.get("facebook") as string;
  const linkedin = formData.get("linkedin") as string;
  const personal_mail = formData.get("personal-mail") as string;
  if (!name) {
    return { name: "Name is required" };
  }
  const data = {
    id,
    name,
    dept,
    batch,
    insta,
    github,
    facebook,
    linkedin,
    personal_mail,
  };
  console.log("Updated profile! ", data);
  revalidatePath("/admin/profile");
  return { name: null };
}
const profile: ProfileProps = {
  id: 1,
  name: "Chittajit Nath",
  institiute_mail: "cn.24u10282@nitdgp.ac.in",
  dept: "Commputer Science and Engineering",
  year: "3rd",
  por: "Senior Member",
  profile_image:
    "https://scontent.cdninstagram.com/v/t51.82787-19/720207173_18102857261105678_8300256230052046442_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=103&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=cSuVXPFClcYQ7kNvwHGJ1_L&_nc_oc=AdrI3anNk4-oik71cPikgUBUdef9D4spNxVRsk9v8DxVRsUtJygLwlvqXak5k1UGQoo&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=rygjeFdrl2iTEWXzHPJaMw&_nc_ss=7b6a8&oh=00_AQDHpJ0E6hNw5_q50HmigXz6PD6I07rhBGkEgtGfBj63ow&oe=6A4DE281",
  insta: "https://www.instagram.com/chittajitnath/",
  github: null,
  facebook: null,
  linkedin: null,
  personal: null,
};

export async function getProfile(): Promise<ProfileProps | null> {
  // TODO: Implement get profile logic
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      resolve(profile);
    }, 2000);
  });
}
