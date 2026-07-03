import { Suspense } from "react";
import UpdateProfileForm from "../_components/UpdateProfileForm";
import { getProfile } from "@/utils/admin/profile";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const profile = await getProfile();
  return {
    title: profile ? `${profile.name} | Update Profile` : "Update Profile - RnD",
    description: "Update your profile information",
  };
}

const Home = async () => {
  const profile = await getProfile();
  return (
    <div className="text-white min-h-screen md:min-h-0 mt-10 md:mt-20 w-full flex flex-col justify-center items-center gap-2 md:gap-4 md:mb-20">
      <Suspense
        fallback={
          <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full">
            Loading...
          </h1>
        }
      >
        {profile ? (
          <UpdateProfileForm profile={profile} />
        ) : (
          <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full">
            Sorry! No Profile found
          </h1>
        )}
      </Suspense>
    </div>
  );
};

export default Home;
