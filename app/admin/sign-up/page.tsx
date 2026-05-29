"use client";

import { InputDemo } from "../_components/InputField";
import ComboboxBasic from "../_components/DepartmentDropdown";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { InputOTPFourDigits } from "../_components/OtpBox";

const departments: { label: string; value: string }[] = [
  { label: "Computer Science and Engineering", value: "cse" },
  { label: "Mathematics and Computing", value: "mc" },
  { label: "Electronics and Communication Engineering", value: "ece" },
  { label: "Electrical Engineering", value: "ee" },
  { label: "Civil Engineering", value: "ce" },
  { label: "Mechanical Engineering", value: "me" },
  { label: "Chemical Engineering", value: "ch" },
  { label: "Chemical Engineering Dual Degree", value: "chdd" },
  { label: "Biotechnology", value: "bt" },
  { label: "Biotechnology Dual Degree", value: "btdd" },
  { label: "Integrated Chemistry(M.Sc)", value: "intmsc" },
  { label: "Materials and Metalergical Engineering", value: "mm" },
] as const;

const batchYear: { label: string; value: string }[] = [
  { label: "2023-27", value: "final" },
  { label: "2024-28", value: "pre-final" },
  { label: "2025-29", value: "second-year" },
  { label: "2026-30", value: "first-year" },
] as const;

const Home = () => {
  const [otpSent, setOtpSent] = useState(false);

  const handelOTP = () => {
    setOtpSent(true);
  };

  return (
    <div className="text-white min-h-screen md:min-h-0 md:mt-60 lg:mt-20 w-full flex flex-col justify-center items-center gap-2 md:gap-4">
      <InputDemo type="text" placeHolder="Enter your name" title="Name" id="name" />
      <InputDemo
        type="email"
        placeHolder="Enter your mail (institute mail preferred)"
        title="E-mail"
        id="mail"
      />
      <InputDemo type="password" placeHolder="Secret Key" title="Secret Key" id="secret_key" />
      <ComboboxBasic
        VALUES={departments}
        id="dept"
        placeHolder="Select your department"
        title="Department"
      />
      <ComboboxBasic
        VALUES={batchYear}
        id="year"
        placeHolder="Select your batch year"
        title="Batch Year"
      />
      {otpSent === true && <InputOTPFourDigits />}
      <div className="w-[60%] flex justify-center gap-5 md:gap-10 my-5">
        <Button className="md:text-lg md:px-5 md:py-4 md:rounded-md lg:text-xl lg:px-8 lg:py-6">
          Sign-In ?
        </Button>
        <Button
          onClick={handelOTP}
          className="md:text-lg md:px-5 md:py-4 md:rounded-md lg:text-xl lg:px-8 lg:py-6"
        >
          {!otpSent ? "Send OTP" : "Sign-up"}
        </Button>
      </div>
    </div>
  );
};

export default Home;
