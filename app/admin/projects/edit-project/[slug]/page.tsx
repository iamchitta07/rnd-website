import BackButton from "@/_components/BackButton";
import { Suspense } from "react";
import { getProject } from "@/utils/admin/projects";
import EditProjectFormPage from "@/app/admin/_components/EditProjectFormPage";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);
  return {
    title: (project ? `${project.title} | Edit` : "Edit Project") + " | Admin",
    description: project ? `Edit ${project.content}` : "Edit an event",
  };
}

const Home = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = await getProject(slug);

  return (
    <div className="w-full mt-12 lg:mt-16 px-5 lg:px-20 flex-1">
      <BackButton />
      <Suspense
        fallback={
          <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full">
            Loading...
          </h1>
        }
      >
        {project ? (
          <EditProjectFormPage project={project} />
        ) : (
          <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full">
            Sorry! No Project found
          </h1>
        )}
      </Suspense>
    </div>
  );
};

export default Home;
