import SearchBar from "../_components/SearchBarMessages";
import CommentCard from "../_components/CommentCard";
import { getMessages } from "@/utils/admin/messages";
import { Suspense } from "react";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const messages = await getMessages();
  let pendingCount = 0;
  messages.forEach((message) => {
    if (!message.read) {
      pendingCount++;
    }
  });
  const title = pendingCount ? `(${pendingCount}) ` : "";
  return {
    title: `${title}Messages | Admin`,
    description: "View and manage messages from visitors",
  };
};

const Home = async () => {
  const messages = await getMessages();
  return (
    <div className="w-full mt-20 lg:mt-18 px-5 lg:px-20 flex flex-col items-center gap-2 md:gap-4 flex-1 mb-20">
      <Suspense
        fallback={
          <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full">
            Loading...
          </h1>
        }
      >
        <SearchBar data={messages} />
        {messages.length ? (
          messages.map((item) => <CommentCard key={item.id} {...item} />)
        ) : (
          <h1 className="text-2xl font-bold text-white flex items-center justify-center w-full">
            No Message Found
          </h1>
        )}
      </Suspense>
    </div>
  );
};

export default Home;
