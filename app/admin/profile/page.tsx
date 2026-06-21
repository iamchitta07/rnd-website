import React from "react";
import ImageUploader from "../_components/ImageUploader";
import PFP from "@/public/pfps/DPP2.png";
import type { ProfileProps } from "@/types";
import { InputDemo } from "../_components/InputField";
import ComboboxBasic from "../_components/DepartmentDropdown";
import { departments, batchYear } from "../sign-up/page";
import { Button } from "@/components/ui/button";

/**
export interface ProfileProps {
  id: number;
  name: string;
  institiute_mail: string;
  dpet: string;
  year: string;
  profile_image: string | null;
  insta: string | null;
  github: string | null;
  facebook: string | null;
  linkedin: string | null;
  personal: string | null;
}
 */

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

const Home = () => {
  return (
    <div className="text-white min-h-screen md:min-h-0 mt-10 md:mt-20 w-full flex flex-col justify-center items-center gap-2 md:gap-4 md:mb-20">
      <h1 className="text-white underline text-2xl md:text-6xl select-none">Upadate Profile</h1>
      <ImageUploader imageUrl={profile.profile_image!} />

      <InputDemo
        type="text"
        placeHolder="Enter your name"
        title="Name"
        id="mail"
        value={profile.name}
        className="w-75 md:w-sm"
      />
      <InputDemo
        type="email"
        placeHolder="Enter your institute mail"
        title="Institute Mail"
        id="mail"
        value={profile.institiute_mail}
        className="w-75 md:w-sm"
      />
      <ComboboxBasic
        VALUES={departments}
        id="dept"
        placeHolder="Select your department"
        title="Department"
        value={profile.dept}
        className="w-75 md:w-sm"
      />
      <ComboboxBasic
        VALUES={batchYear}
        id="atch"
        placeHolder="Select your batch"
        title="Batch Year"
        value={profile.year}
        className="w-75 md:w-sm"
      />
      <InputDemo
        type="text"
        placeHolder="Enter your instagram handel"
        title="Insta Handel"
        id="insta"
        value={profile.insta}
        className="w-75 md:w-sm"
      />
      <InputDemo
        type="text"
        placeHolder="Enter your github handel"
        title="GitHub Handel"
        id="github"
        value={profile.github}
        className="w-75 md:w-sm"
      />
      <InputDemo
        type="text"
        placeHolder="Enter your Linkedin handel"
        title="Linkedin Handel"
        id="linkedin"
        value={profile.linkedin}
        className="w-75 md:w-sm"
      />
      <InputDemo
        type="text"
        placeHolder="Enter your facebook handel"
        title="Facebook Handel"
        id="facebook"
        value={profile.facebook}
        className="w-75 md:w-sm"
      />
      <InputDemo
        type="email"
        placeHolder="Enter your personal mail"
        title="Personal Mail"
        id="persona-mail"
        value={profile.personal}
        className="w-75 md:w-sm"
      />
      <Button className="px-10 py-5">Save Changes</Button>
    </div>
  );
};

export default Home;
