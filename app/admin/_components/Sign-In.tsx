"use client";

import { useActionState } from "react";
import { InputDemo } from "@/_components/InputField";
import { Button } from "@/components/ui/button";
import { signInHandler, type SigninErrorProps } from "@/utils/admin/auth";
import { Spinner } from "@/components/ui/spinner";
import { redirect } from "next/navigation";

const initialValue: SigninErrorProps = {
  name: null,
  email: null,
  secretKey: null,
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
      <div className="w-75 md:w-xl xl:w-2xl flex justify-center gap-5 md:gap-10 my-5">
        <Button
          className="md:text-lg md:px-5 md:py-4 md:rounded-md lg:text-xl lg:px-8 lg:py-6"
          onClick={() => redirect("/admin/sign-up")}
          disabled={isPending}
          type="button"
        >
          New Here ?
        </Button>
        <Button
          className="md:text-lg md:px-5 md:py-4 md:rounded-md lg:text-xl lg:px-8 lg:py-6"
          disabled={isPending}
          type="submit"
        >
          {isPending && <Spinner data-icon="inline-start" className="ml-10" />}
          {isPending ? "Signing in..." : "Sign-In"}
        </Button>
      </div>
    </form>
  );
}
