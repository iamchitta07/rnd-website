"use client";
import { Button } from "@/components/ui/button";
import { ProfileProps } from "@/types";
import { InputDemo } from "@/_components/InputField";
import ComboboxBasic from "@/_components/DepartmentDropdown";
import ImageUploader from "./ImageUploader";
import { batchYear, departments } from "@/utils/constants";
import { useActionState } from "react";
import { ProfileUpdateErrorProps, updateProfile } from "@/utils/admin/profile";
const initialValue: ProfileUpdateErrorProps = {
  name: null,
};
export default function UpdateProfileForm({ profile }: { profile: ProfileProps }) {
  const [state, action, isPending] = useActionState(updateProfile, initialValue);
  return (
    <form className="w-full flex flex-col items-center gap-3 mb-10 mt-10" action={action}>
      <ImageUploader imageUrl={profile.profile_image ?? undefined} />
      <InputDemo
        type="text"
        placeHolder="Enter your name"
        title="Name"
        id="name"
        defaultValue={profile.name}
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
      />
      <InputDemo
        type="email"
        placeHolder="Enter your institute mail"
        title="Institute Mail"
        id="mail"
        defaultValue={profile.institiute_mail}
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
        disabled
      />
      <ComboboxBasic
        VALUES={departments}
        id="dept"
        placeHolder="Select your department"
        title="Department"
        value={profile.dept}
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
      />
      <ComboboxBasic
        VALUES={batchYear}
        id="batch"
        placeHolder="Select your batch"
        title="Batch Year"
        value={profile.year}
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
      />
      <InputDemo
        type="text"
        placeHolder="Enter your instagram handel"
        title="Insta Handel"
        id="insta"
        defaultValue={profile.insta}
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
      />
      <InputDemo
        type="text"
        placeHolder="Enter your github handel"
        title="GitHub Handel"
        id="github"
        defaultValue={profile.github}
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
      />
      <InputDemo
        type="text"
        placeHolder="Enter your Linkedin handel"
        title="Linkedin Handel"
        id="linkedin"
        defaultValue={profile.linkedin}
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
      />
      <InputDemo
        type="text"
        placeHolder="Enter your facebook handel"
        title="Facebook Handel"
        id="facebook"
        defaultValue={profile.facebook}
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
      />
      <InputDemo
        type="email"
        placeHolder="Enter your personal mail"
        title="Personal Mail"
        id="persona-mail"
        defaultValue={profile.personal}
        className="w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl"
      />
      <Button
        className="px-5 md:px-10 py-5 md:py-6 text-lg md:text-xl"
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Saving..." : "Save Changes"}
      </Button>
    </form>
  );
}
