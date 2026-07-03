import { Metadata } from "next";
import BackButton from "../../../../_components/BackButton";
import NewPostForm from "../../_components/NewPostForm";

export const metadata: Metadata = {
  title: "New Post | Admin",
  description: "Create a new post",
};

const Home = () => {
  return (
    <div className="w-full mt-14 lg:mt-16 px-5 lg:px-20">
      <BackButton />
      <NewPostForm />
    </div>
  );
};

export default Home;
