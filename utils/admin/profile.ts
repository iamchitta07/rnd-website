"use server";

import { revalidatePath } from "next/cache";
import PFP from "@/public/pfps/DPP2.png";
import { StaticImageData } from "next/image";

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
export interface ProfileProps {
  id: number;
  name: string;
  institiute_mail: string;
  dept: string;
  year: string;
  profile_image: string | null | StaticImageData;
  insta: string | null;
  github: string | null;
  facebook: string | null;
  linkedin: string | null;
  personal: string | null;
}
const profile: ProfileProps = {
  id: 1,
  name: "Chittajit Nath",
  institiute_mail: "cn.24u10282@nitdgp.ac.in",
  dept: "Commputer Science and Engineering",
  year: "3rd",
  profile_image: PFP,
  insta: null,
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
