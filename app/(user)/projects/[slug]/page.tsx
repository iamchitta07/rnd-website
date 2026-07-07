import Link from "next/link";
import BackButton from "@/_components/BackButton";
import { getProject } from "@/utils/admin/projects";
import { Suspense } from "react";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = await getProject(slug);
  return {
    title: (project ? project.title : "Projcet") + " | CCA RnD",
    description: project ? project.content : "Description",
  };
};

async function GetProject({ slug }: { slug: string }) {
  const project = await getProject(slug);
  if (!project) {
    notFound();
  }
  return (
    <>
      <h1 className="text-4xl mt-5">{project.title}</h1>
      <h1 className="text-2xl">
        Developed by <span className="font-medium italic">{project.author}</span>
      </h1>
      <p className="mt-5 w-full md:w-180 lg:w-280 text-justify px-4">{project.content}</p>
      <Link
        href={project.link}
        target="_blank"
        className="w-40 md:w-50 bg-primary rounded-md py-3 md:py-3 text-sm md:text-lg mt-5 mb-10"
      >
        View Code Base
      </Link>
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
          <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full min-h-screen -mt-12 lg:-mt-18">
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
