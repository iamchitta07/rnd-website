import Header from "../_components/header/Header";
import { adminHeaderLinks } from "@/utils";
const name = "Chittajit Nath";
const Home = () => {
  return (
    <div className="text-white flex justify-center items-center flex-1 w-full min-h-screen">
      {/* <Sidebar /> */}
      <div className="text-center">
        <h1 className="text-3xl lg:text-8xl">Hello! {name}</h1>
        <h1 className="text-lg lg:text-5xl">Welcome back! To RnD Portal</h1>
      </div>
    </div>
  );
};
export default Home;
