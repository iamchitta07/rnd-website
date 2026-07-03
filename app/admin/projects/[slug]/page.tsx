import Link from "next/link";
import BackButton from "@/_components/BackButton";
import { getProject } from "@/utils/admin/projects";
import { Suspense } from "react";

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = await getProject(slug);
  return {
    title: (project ? project.title : "Projcet") + " | Admin",
    description: project ? project.content : "Description",
  };
};

async function GetProject({ slug }: { slug: string }) {
  const project = await getProject(slug);
  if (!project) {
    return (
      <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full">
        Sorry! No Project found
      </h1>
    );
  }
  return (
    <>
      <h1 className="text-5xl mt-5">{project.title}</h1>
      <h1 className="text-2xl italic">Developed by {project.author}</h1>
      <p className="mt-5 w-full md:w-180 lg:w-280 text-justify px-4">{project.content}</p>
      <div className="mt-5 mb-10 flex gap-5">
        <Link
          href={project.link}
          target="_blank"
          className="w-40 md:w-50 bg-primary rounded-md py-3 md:py-3 text-sm md:text-lg"
        >
          View Code Base
        </Link>
        <Link
          href={`/admin/projects/edit-project/${project.id}`}
          className="w-40 md:w-50 bg-primary rounded-md py-3 md:py-3 text-sm md:text-lg"
        >
          Edit Project
        </Link>
      </div>
    </>
  );
}

const Home = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <div className="relative w-full mt-14 lg:mt-18 px-5 lg:px-20 flex-1 text-white flex flex-col text-center gap-2 items-center">
      <BackButton />
      <Suspense
        fallback={
          <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full">
            Loading...
          </h1>
        }
      >
        <GetProject slug={slug} />
      </Suspense>
    </div>
  );
};

export default Home;
