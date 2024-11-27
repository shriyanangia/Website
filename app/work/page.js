import { Suspense } from "react";
import ProjectList from "../_components/ProjectList";
import Spinner from "../_components/Spinner";

//ISR: incremental static regeneration
//only applies to statically generated pages - upon including searchParams this no longer takes any effect
export const revalidate = 3600;
// export const revalidate = 15;

export const metadata = {
  title: "Work",
};

//searchParams is only available in page.js not in server components
//when making use of searchParams, page cannot be statically rendered since we do not know these params at run time
//page will always be dynamically rendered
export default function Page() {

  return (
    <div>
      <h1 className="text-4xl mb-5 dark:text-accent-400 text-accent-600 font-medium">
        My Work
      </h1>
      <p className="dark:text-primary-200 text-primary-800 text-lg mb-10">
      In this section, you&apos;ll find projects that showcase
      my expertise, creativity, and problem-solving skills. From collaborative,
      end-user focused work in my professional role to self-initiated projects that
      reflect my passion for learning. Whether it&apos;s designing, developing, or strategizing, I bring a hands-on approach
      to every project.
      </p>

      <Suspense fallback={<Spinner />}>
        <ProjectList />
      </Suspense>
    </div>
  );
}
