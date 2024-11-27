import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import Link from "next/link";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};


export default async function Page() {

  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 dark:text-accent-400 text-accent-600 font-medium">
          Welcome 🌸
        </h1>

        <div className="space-y-8">
          <p>
            Although this site originally began as a simple portfolio, I wanted it to evolve into something much more personal.
          </p>
          <p>
            Beyond showcasing my professional work and experiences, this space is a reflection of who I am—my passions, my creative journey, and the things that inspire me. 
            It&apos;s a place where I can share what I&apos;m most proud of, whether that&apos;s in my career, my hobbies, or my personal projects.
          </p>
          <p>
            This is a glimpse into the person behind the work, and I hope it resonates with you. I&apos;d love to connect, so please don&apos;t hesitate to reach out!
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1} 
          alt="Individual portrait"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Singapore skyline"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 dark:text-accent-400 text-accent-600 font-medium">
          From Singapore to California
        </h1>

        <div className="space-y-8">
          <p>
            I grew up in Singapore, where I spent the first 17 years of my life—years I look back on fondly and love talking about.
          </p>
          <p>
            After high school, I made the leap to the University of Iowa to start my undergraduate studies. My journey was uniquely shaped by 
            the challenges of the pandemic, which had me shuttling back and forth between Singapore and Iowa. Now, I&apos;ve settled in the Bay Area, where I continue to grow both professionally and personally. It&apos;s been an incredible journey of adaptation, discovery, and growth, and I&apos;m excited to see where the next chapter takes me.
          </p>

          <div>
            <Link
              href="/work"
              className="inline-block mt-4 dark:bg-accent-800 bg-accent-200 px-8 py-5 dark:text-primary-100 text-primary-900 text-lg font-semibold hover:dark:bg-accent-600 over:bg-accent-400 transition-all"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </div>

     
      <div className="col-span-5">
        <h2 className="text-3xl mb-10 dark:text-accent-400 text-accent-600 font-medium">
          Interests
        </h2>

        <div className="grid grid-cols-3 gap-12">

             {/* Performing Arts */}
          <Link href="about/interests/performing-arts" className="relative aspect-square group">
            <Image
              src="/performing-arts.jpg"
              alt="Performing Arts"
              fill
              className="object-cover rounded-lg transition-all group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white font-semibold text-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all">
              Performing Arts
            </div>
          </Link>

          {/* Literature */}
          <Link href="about/interests/literature" className="relative aspect-square group">
            <Image
              src="/literature.jpg"
              alt="Literature"
              fill
              className="object-cover rounded-lg transition-all group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white font-semibold text-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all">
              Literature
            </div>
          </Link>

          {/* Travel/Outdoorsie Stuff */}
          {/* <Link href="about/interests/travel" className="relative aspect-square group">
            <Image
              src="/travel.jpg"
              alt="Travel & Outdoors"
              fill
              className="object-cover rounded-lg transition-all group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white font-semibold text-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all">
              Travel/Outdoors
            </div>
          </Link> */}

          {/* Visual Arts */}
          <Link href="about/interests/visual-arts" className="relative aspect-square group">
            <Image
              src="/visual-arts.jpg"
              alt="Visual Arts"
              fill
              className="object-cover rounded-lg transition-all group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white font-semibold text-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all">
              Visual Arts
            </div>
          </Link>

              {/* Film/TV */}
              {/* <Link href="about/interests/film" className="relative aspect-square group">
            <Image
              src="/film.jpg" 
              alt="Film and TV"
              fill
              className="object-cover rounded-lg transition-all group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white font-semibold text-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all">
              Film/TV
            </div>
          </Link> */}

        </div>
      </div>
    </div>
  );
}

