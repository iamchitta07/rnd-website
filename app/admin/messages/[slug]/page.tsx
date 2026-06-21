import { Button } from "@/components/ui/button";
import { MessageProps } from "@/types";

const example: MessageProps = {
  id: 1,
  name: "Chittajit Nath",
  phone_number: "6295068732",
  mail: "nathchittajit8@gmail.com",
  dept: "CSE",
  year: "3rd",
  domain_interested: "AI/ML",
  comment: "I have lot of interest in this domain",
  read: false,
  date: new Date(2026, 5, 13, 12, 30, 30),
};

const Home = () => {
  const phone = "+91 " + example.phone_number.slice(0, 5) + " " + example.phone_number.slice(5, 10);
  return (
    <div className="w-full mt-20 md:mt-30 px-5 lg:px-20 flex flex-col items-center gap-2 md:gap-4 flex-1 mb-20 text-white leading-none">
      <h1 className="text-3xl md:text-5xl/6">{example.name}</h1>
      <h1 className="text-slate-200 text-xl md:text-2xl/6 italic">{example.mail}</h1>
      <h1 className="md:text-lg/1 lines">{phone}</h1>
      <h1 className="md:text-lg/2">{example.dept}</h1>
      <h1 className="md:text-lg/2">{example.domain_interested}</h1>
      <p className="w-75 md:w-xl lg:w-2xl bg-white/90 p-2 min-h-20 md:min-h-30 border border-black rounded-lg md:rounded-2xl text-xs md:text-lg text-zinc-900 shadow-lg/30 shadow-slate-100 text-center mt-5">
        {example.comment}
      </p>
      <div className="flex gap-4 justify-center mt-5">
        {!example.read ? (
          <Button className="px-8 md:px-10 md:py-6 md:text-xl text-green-400">Mark as Read</Button>
        ) : (
          <Button className="px-8 md:px-10 md:py-6 md:text-xl text-orange-400">
            Mark as Unread
          </Button>
        )}
        <Button variant="destructive" className="px-10 md:px-20 md:py-6 md:text-xl">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Home;
