import { MessageProps } from "@/types";
import SearchBar from "../_components/SearchBarMessages";
import CommentCard from "../_components/CommentCard";

const messages: MessageProps[] = [
  {
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
  },
  {
    id: 2,
    name: "Rana Ghosh",
    phone_number: "6295068874",
    mail: "ranaghosh@gmail.com",
    dept: "ME",
    year: "3rd",
    domain_interested: "Mechatronics",
    comment: "I have lot of interest in this domain",
    read: true,
    date: new Date(2026, 4, 13, 12, 30, 39),
  },
];

const Home = () => {
  return (
    <div className="w-full mt-20 lg:mt-18 px-5 lg:px-20 flex flex-col items-center gap-2 md:gap-4 flex-1 mb-20">
      <SearchBar data={messages} />
      {messages.map((item) => (
        <CommentCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Home;
