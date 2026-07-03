"use client";

import { useActionState } from "react";
import { InputDemo } from "@/_components/InputField";
import { Button } from "@/components/ui/button";
import { signInHandler, type SignUpErrorProps } from "@/utils/admin/auth";
import { Spinner } from "@/components/ui/spinner";
import ComboboxBasic from "@/_components/DepartmentDropdown";
import { batchYear, departments } from "@/utils/constants";
import { redirect } from "next/navigation";

const initialValue: SignUpErrorProps = {
  name: null,
  email: null,
  secretKey: null,
  dept: null,
  year: null,
};

export default function SignIn() {
  const [state, action, isPending] = useActionState(signInHandler, initialValue);
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
        type="password"
        placeHolder="Secret Key"
        title="Secret Key"
        id="secret_key"
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
      <div className="w-75 md:w-xl xl:w-2xl flex justify-center gap-5 md:gap-10 my-5">
        <Button
          className="md:text-lg md:px-5 md:py-4 md:rounded-md lg:text-xl lg:px-8 lg:py-6"
          onClick={() => redirect("/admin/sign-in")}
          disabled={isPending}
          type="button"
        >
          Sign In ?
        </Button>
        <Button
          className="md:text-lg md:px-5 md:py-4 md:rounded-md lg:text-xl lg:px-8 lg:py-6"
          disabled={isPending}
          type="submit"
        >
          {isPending && <Spinner data-icon="inline-start" className="ml-10" />}
          {isPending ? "Signing up..." : "Sign-Up"}
        </Button>
      </div>
    </form>
  );
}
