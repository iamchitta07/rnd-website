"use client";

import { useActionState } from "react";
import { InputDemo } from "@/_components/InputField";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import ComboboxBasic from "@/_components/DepartmentDropdown";
import { batchYear, departments, interests } from "@/utils/constants";
import { ContentBox } from "@/_components/ContentBox";
import { JoinUsErrorProps, messageSubmitHandler } from "@/utils/user/join-us";

const initialValue: JoinUsErrorProps = {
  name: null,
  email: null,
  phone: null,
  dept: null,
  year: null,
  interest: null,
  content: null,
};

export default function JoinUsForm() {
  const [state, action, isPending] = useActionState(messageSubmitHandler, initialValue);
  return (
    <form action={action} className="w-full flex flex-col items-center gap-3">
      <InputDemo
        type="text"
        placeHolder="Enter your name"
        title="Name"
        id="name"
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
      />
      <InputDemo
        type="email"
        placeHolder="Enter your mail (institute mail preferred)"
        title="E-mail"
        id="mail"
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
      />
      <InputDemo
        type="text"
        placeHolder="Enter your phone number"
        title="Phone Number"
        id="phone"
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
      />
      <ComboboxBasic
        VALUES={departments}
        id="dept"
        placeHolder="Select your department"
        title="Department"
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl text-white"
      />
      <ComboboxBasic
        VALUES={batchYear}
        id="year"
        placeHolder="Select your batch year"
        title="Batch Year"
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl text-white"
      />
      <ComboboxBasic
        VALUES={interests}
        id="interest"
        placeHolder="Select your interest"
        title="Domain of Interest"
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl text-white"
      />
      <ContentBox placeHolder="Tell us about your interests and goals" />
      <Button
        className="md:text-lg md:px-5 md:py-4 md:rounded-md lg:text-xl lg:px-8 lg:py-6"
        disabled={isPending}
        type="submit"
      >
        {isPending && <Spinner data-icon="inline-start" className="ml-10" />}
        {isPending ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
