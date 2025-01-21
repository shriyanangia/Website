import Image from "next/image";
import bg from "@/public/bg.png";
import bgdark from "@/public/bgdark.png";
import {motion} from "framer-motion"
import { ComputersCanvas } from "./_components/canvas";
import Link from 'next/link'
import { SocialIcon } from "react-social-icons";
import AvatarCanvas from "./_components/canvas/Avatar";

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
    <div className="bg-primary-50 dark:bg-primary-950 bg-opacity-50 dark:bg-opacity-30 p-10 rounded-lg shadow-lg text-center w-full max-w-2xl flex flex-col items-center space-y-8">
    {/* Title */}
    <h1 className="text-5xl text-primary-950 dark:text-primary-50 font-semibold tracking-tight">
      Hi, I'm Shriya
    </h1>
    <h2>
      A full stack front-end developer 
    </h2>

    {/* Resume Button */}
    <Link
      href="https://shriyanangia.github.io/resume/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-accent-200 dark:bg-accent-800 px-6 py-3 dark:text-primary-100 text-primary-900 text-lg font-semibold rounded-md hover:dark:bg-accent-600 hover:bg-accent-400 transition-all mb-6"
    >
      Resume
    </Link>
    <AvatarCanvas/>

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

  </div>

    </main>
  );
}
