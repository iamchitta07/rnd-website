import JoinUsForm from "../_components/JoinUsForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us | CCA RnD",
  description: "Join us at RND",
};

function JoinUs() {
  return (
    <div className="relative my-20 flex flex-col items-center w-full">
      <JoinUsForm />
    </div>
  );
}

export default JoinUs;
