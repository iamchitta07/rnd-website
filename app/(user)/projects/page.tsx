import { Metadata } from "next";
import ProjectCard from "@/_components/ProjectCard";
import SearchBar from "@/_components/SearchBar";
import { getProjects } from "@/utils/admin/projects";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Projects | CCA RnD",
  description:
    "Write from the begining of the dark age alot of ground breaking discoveries were made by man. There is no field in which research is not done. Research and Development (R&D) flourishes where young minds and experienced faculties work synergistically. R&D Cell has been established to promote and monitor the research Programs of the institute. The cell administers all the research Programs of the university by monitoring and coordinating the research Programs.The Research and Development Cell aims to nurture research culture in the College by promoting research in newly emerging and challenging areas of Engineering, Technology, Science and Humanities. Faculty and students have been encouraged to be creative, since it is the creative aspect that induces newer thinking. Lectures and demonstration are made for students to kindle their spirit of creativity by our own faculty and other experts along with paper presentation and workshop.",
};

async function GetProjects() {
  const projects = await getProjects();
  return (
    <div className="w-full px-5 lg:px-20 flex flex-col items-center gap-4 flex-1">
      <SearchBar data={projects} />
      {projects.length ? (
        <ul className="w-full flex flex-col gap-2 md:gap-3 items-center ">
          {projects.map((e) => (
            <ProjectCard key={e.id} {...e} />
          ))}
        </ul>
      ) : (
        <h1 className="text-2xl font-bold text-white flex items-center justify-center w-full">
          No Project Found
        </h1>
      )}
    </div>
  );
}
const ProjectPage = async () => {
  return (
    <div className="relative my-20 flex flex-col items-center w-full">
      <Suspense
        fallback={
          <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full min-h-screen -mt-20">
            Loading...
          </h1>
        }
      >
        <GetProjects />
      </Suspense>
    </div>
  );
};

export default ProjectPage;
