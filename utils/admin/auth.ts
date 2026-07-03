"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export interface SigninErrorProps {
  name: string | null;
  email: string | null;
  secretKey: string | null;
}

export async function signInHandler(
  _prevState: SigninErrorProps,
  formData: FormData,
): Promise<SigninErrorProps> {
  const name = formData.get("name") as string;
  const email = formData.get("mail") as string;
  const secretKey = formData.get("secret_key") as string;
  const err: SigninErrorProps = {
    name: null,
    email: null,
    secretKey: null,
  };
  if (!name) {
    err.name = "Name is required";
  }
  if (!email) {
    err.email = "Email is required";
  }
  if (!secretKey) {
    err.secretKey = "Secret key is required";
  }
  if (err.name || err.email || err.secretKey) {
    return err;
  }

  // TODO: Add actual authentication logic here
  // For now, we'll just simulate a delay

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  revalidatePath("/admin");
  redirect("/admin");
}

export interface SignUpErrorProps {
  name: string | null;
  email: string | null;
  secretKey: string | null;
  dept: string | null;
  year: string | null;
}

export async function signUpHandler(_prevState: SignUpErrorProps, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("mail") as string;
  const secretKey = formData.get("secret_key") as string;
  const dept = formData.get("dept") as string;
  const year = formData.get("year") as string;
  const err: SignUpErrorProps = {
    name: null,
    email: null,
    secretKey: null,
    dept: null,
    year: null,
  };
  if (!name) {
    err.name = "Name is required";
  }
  if (!email) {
    err.email = "Email is required";
  }
  if (!secretKey) {
    err.secretKey = "Secret key is required";
  }
  if (!dept) {
    err.dept = "Department is required";
  }
  if (!year) {
    err.year = "Year is required";
  }
  if (err.name || err.email || err.secretKey || err.dept || err.year) {
    return err;
  }

  // TODO: Add actual authentication logic here
  // For now, we'll just simulate a delay

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  revalidatePath("/admin");
  redirect("/admin");
}

export async function logOutHandler() {
  // TODO: Add actual logout logic here
  // For now, we'll just simulate a delay

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  redirect("/");
}
