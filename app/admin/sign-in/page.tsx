"use client";

import { InputDemo } from "../_components/InputField";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="text-white min-h-screen md:min-h-0 md:mt-60 lg:mt-20 w-full flex flex-col justify-center items-center gap-2 md:gap-3">
      <InputDemo
        type="text"
        placeHolder="Enter your name"
        title="Name"
        id="name"
        className="w-[60%] lg:w-[30%]"
      />
      <InputDemo
        type="email"
        placeHolder="Enter your mail (institute mail preferred)"
        title="E-mail"
        id="mail"
        className="w-[60%] lg:w-[30%]"
      />
      <InputDemo
        type="password"
        placeHolder="Secret Key"
        title="Secret Key"
        id="secret_key"
        className="w-[60%] lg:w-[30%]"
      />
      <div className="w-[60%] flex justify-center gap-5 md:gap-10 my-5">
        <Button className="md:text-lg md:px-5 md:py-4 md:rounded-md lg:text-xl lg:px-8 lg:py-6">
          New Here ?
        </Button>
        <Button className="md:text-lg md:px-5 md:py-4 md:rounded-md lg:text-xl lg:px-8 lg:py-6">
          Sign-In
        </Button>
      </div>
    </div>
  );
};

export default Home;
