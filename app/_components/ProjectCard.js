"use client"
import Link from "next/link";
import { Tilt } from "react-tilt";

function ProjectCard({ project }) {
    const { id, name, description } = project;
  
    return (
      <Tilt
        className="xs:w-[250px] w-full"
        options={{
          max: 45, // Maximum tilt angle
          scale: 1.05, // Slight zoom on hover
          speed: 450, // Animation speed
        }}
      >
        <div className="flex-grow p-[1px] rounded-[5px] shadow-card" >
          <div className="pt-5 pb-4 px-7 dark:bg-primary-950 bg-primary-50">
            <h3 className="text-accent-500 font-semibold text-2xl mb-3">{name}</h3>
  
            <div className="flex gap-3 items-center mb-2">
              <p className="text-lg dark:text-primary-200 text-primary-800">
                {description}
              </p>
            </div>
          </div>
          <div className="dark:bg-primary-950 bg-primary-50 border-t dark:border-t-primary-800 border-t-primary-200 text-right">
            <Link
              href={`/work/${id}`}
              className="border-l dark:border-primary-800 border-primary-200 py-4 px-6 inline-block dark:hover:bg-accent-600 hover:bg-accent-400 transition-all hover:dark:text-primary-900 hover:text-primary-100"
            >
              Details &rarr;
            </Link>
          </div>
        </div>
      </Tilt>
    );
  }

export default ProjectCard;