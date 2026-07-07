"use server";

import { isInvalidInput } from "../functions";
import { JoinUsProps } from "@/types";
import xss from "xss";

export interface JoinUsErrorProps {
  name: string | null;
  email: string | null;
  phone: string | null;
  dept: string | null;
  year: string | null;
  interest: string | null;
  content: string | null;
}
export async function messageSubmitHandler(
  _prevState: JoinUsErrorProps,
  formData: FormData,
): Promise<JoinUsErrorProps> {
  const name = formData.get("name") as string;
  const email = formData.get("mail") as string;
  const phone = formData.get("phone") as string;
  const dept = formData.get("dept") as string;
  const year = formData.get("year") as string;
  const interest = formData.get("interest") as string;
  const content = xss(formData.get("content") as string);

  const err: JoinUsErrorProps = {
    name: null,
    email: null,
    phone: null,
    dept: null,
    year: null,
    interest: null,
    content: null,
  };

  if (isInvalidInput(name)) err.name = "Name is required";
  if (isInvalidInput(email)) err.email = "Email is required";
  if (isInvalidInput(phone)) err.phone = "Phone is required";
  if (isInvalidInput(dept)) err.dept = "Department is required";
  if (isInvalidInput(year)) err.year = "Year is required";
  if (isInvalidInput(interest)) err.interest = "Interest is required";
  if (isInvalidInput(content)) err.content = "Content is required";

  Object.values(err).forEach((value) => {
    if (value) return err;
  });

  const data: JoinUsProps = {
    name,
    email,
    phone,
    dept,
    year,
    interest,
    content,
  };
  console.log(data);

  await new Promise((res) => setTimeout(res, 2000));
  return err;
}
