import { getProfile } from "@/utils/admin/profile";
import { Suspense } from "react";

async function DisplayUser() {
  const profile = await getProfile();
  return (
    <div className="text-center">
      <h1 className="text-3xl lg:text-8xl">Hello! {profile?.name}</h1>
      <h1 className="text-lg lg:text-5xl">Welcome back! To RnD Portal</h1>
    </div>
  );
}

const Home = () => {
  return (
    <div className="text-white flex justify-center items-center flex-1 w-full min-h-screen">
      <Suspense
        fallback={
          <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full">
            Loading...
          </h1>
        }
      >
        <DisplayUser />
      </Suspense>
    </div>
  );
};
export default Home;
