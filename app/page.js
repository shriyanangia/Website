import Image from "next/image";
import bg from "@/public/bg.png";
import bgdark from "@/public/bgdark.png";
import Link from 'next/link'
import { SocialIcon } from "react-social-icons";
import AvatarCanvas from "./_components/canvas/Avatar";
// import {motion} from "framer-motion"

//each of the pages in a Next.js application is a server component - pages always need to be server components
export default function Page() {
  console.log(bgdark);
  console.log(bg);
  return (
    <main className="mt-18 lg:mt-24">
  <>
    <Image
      src={bg}
      fill
      placeholder="blur"
      quality={80}
      className="object-cover object-center dark:hidden"
      alt="background picture of stationery on a table"
    />
    <Image
      src={bgdark}
      fill
      placeholder="blur"
      quality={80}
      className="object-cover object-center hidden dark:block"
      alt="background picture of stationery on a table"
    />
  </>
  <div className="relative z-10 flex justify-center items-center">
    <div className="bg-primary-50 dark:bg-primary-950 bg-opacity-80 dark:bg-opacity-80 lg:p-10 p-3 rounded-lg shadow-lg max-w-2xl mx-auto flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
      {/* Left half */}
      <div className="lg:w-1/2 flex flex-col space-y-4">
        {/* Title */}
        <h1 className="text-5xl text-center text-primary-950 dark:text-primary-50 font-semibold tracking-tight">
          Hi, I`&apos;`m Shriya
        </h1>
        <h2 className="text-center">
          A full stack front-end developer
        </h2>

        {/* Resume Button */}
        <Link
          href="https://shriyanangia.github.io/resume/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center bg-accent-200 dark:bg-accent-800 px-6 py-3 dark:text-primary-100 text-primary-900 text-lg font-semibold rounded-md hover:dark:bg-accent-600 hover:bg-accent-400 transition-all mb-6"
        >
          Resume
        </Link>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          {/* Email */}
          <SocialIcon
            url="mailto:shriyanangia@yahoo.com.sg"
            target="_blank"
            rel="noopener noreferrer"
            bgColor="#ffffff"
            fgColor="#ff5a01"
            style={{ height: 40, width: 40 }}
          />

          {/* LinkedIn */}
          <SocialIcon
            url="https://linkedin.com/in/shriya-nangia"
            target="_blank"
            rel="noopener noreferrer"
            bgColor="#ffffff"
            fgColor="#0077b5"
            style={{ height: 40, width: 40 }}
          />

          {/* GitHub */}
          <SocialIcon
            url="https://github.com/shriyanangia"
            target="_blank"
            rel="noopener noreferrer"
            bgColor="#ffffff"
            fgColor="#333333"
            style={{ height: 40, width: 40 }}
          />
        </div>
      </div>

      {/* Right half */}
      <div className="lg:w-1/2 flex justify-center">
        <AvatarCanvas />
      </div>
    </div>
  </div>
</main>

  );
}
