import Project from "@/app/_components/Project";
import { getProject, getProjects } from "@/app/_lib/data-service";
import Spinner from "@/app/_components/Spinner";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { name } = await getProject((await params).projectID);
  return { title: `Project ${name}` };
}

//telling Next.js ahead of time which params actually exist for this page/ dynamic route
//making a dynamic page static with generateStaticParams
export async function generateStaticParams() {
  const projects = await getProjects();

  const ids = projects.map((project) => ({ projectID: String(project.id) }));

  return ids;
}

export default async function Page({ params }) {
  const project = await getProject((await params).projectID);
  return (
    <div className="max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<Spinner/>}>

            <Project project={project} />
        </Suspense>
      
    </div>
  );
}
