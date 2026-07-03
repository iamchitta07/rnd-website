import { getMessage } from "@/utils/admin/messages";
import { Suspense } from "react";
import MessageForm from "../../_components/MessageForm";
import BackButton from "@/_components/BackButton";

async function GetMessage({ slug }: { slug: string }) {
  const message = await getMessage(parseInt(slug));
  if (!message) {
    return (
      <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full">
        Sorry! No Message found
      </h1>
    );
  }
  const phone = "+91 " + message.phone_number.slice(0, 5) + " " + message.phone_number.slice(5, 10);
  return (
    <div className="w-full mt-20 md:mt-30 px-5 lg:px-20 flex flex-col items-center gap-2 md:gap-4 flex-1 mb-20 text-white leading-none">
      <h1 className="text-3xl md:text-5xl/6">{message.name}</h1>
      <h1 className="text-slate-200 text-xl md:text-2xl/6 italic">{message.mail}</h1>
      <h1 className="md:text-lg/1 lines">{phone}</h1>
      <h1 className="md:text-lg/2">{message.dept}</h1>
      <h1 className="md:text-lg/2">{message.domain_interested}</h1>
      <p className="w-75 md:w-xl lg:w-2xl bg-white/90 p-2 min-h-20 md:min-h-30 border border-black rounded-lg md:rounded-2xl text-xs md:text-lg text-zinc-900 shadow-lg/30 shadow-slate-100 text-center mt-5">
        {message.comment}
      </p>
      <MessageForm flag={message.read} id={message.id} />
    </div>
  );
}

const Home = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return (
    <div className="relative min-h-screen md:min-h-0 w-full mt-14 lg:mt-18 px-5 lg:px-20 flex-1 text-white flex flex-col text-center gap-2 items-center">
      <BackButton />
      <Suspense
        fallback={
          <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full">
            Loading...
          </h1>
        }
      >
        <GetMessage slug={slug} />
      </Suspense>
    </div>
  );
};

export default Home;
