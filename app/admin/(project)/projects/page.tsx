import StickyAddButton from "../../_components/AddButton";
import ProjectCard from "../../_components/ProjectCard";
import SearchBar from "../../_components/SearchBar";

const mockDatabaseItems = [
  {
    id: "1",
    title: "RnD Web Site",
    author: "Chittajit Nath",
    link: "github.com/iamchitta07/rnd-website",
  },
  { id: "2", title: "AI Judge", author: "Arkajit Kayal", link: "gitlab.com/arkajit/ai-judge" },
  {
    id: "3",
    title: "AI Interview",
    author: "Vamshidhar Reddy",
    link: "github.com/vamshidhar/ai-interview",
  },
];

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="w-full mt-20 lg:mt-18 px-5 lg:px-20 flex flex-col items-center gap-4 flex-1">
        <SearchBar data={mockDatabaseItems} />
        <ul className="w-full flex flex-col gap-2 md:gap-3 items-center ">
          {mockDatabaseItems.map((e) => (
            <ProjectCard key={e.id} {...e} />
          ))}
        </ul>
      </div>
      <StickyAddButton dir="new-project" />
    </div>
  );
};

export default Home;
