import {
  ReactOriginal,
  NodejsOriginal,
  SupabaseOriginal,
  NextjsOriginal,
  TypescriptOriginal,
  JavascriptOriginal,
  Html5Original,
  Css3Original,
  TailwindcssOriginal,
  MaterialuiOriginal,
  CplusplusOriginal,
  UnityOriginal,
  ReactrouterOriginal,
  ViteOriginal,
  CsharpOriginal,
} from "devicons-react";
import TextExpander from "./TextExpander";
import Link from "next/link";

const categoryMap = {
  frontend: [
    "react",
    "next.js",
    "typescript",
    "javascript",
    "html",
    "css",
    "tailwindcss",
    "material-ui",
  ],
  backend: ["node.js", "c++", "c#"],
  database: ["supabase"],
  other: ["unity", "reactrouter", "vite"],
};

const techIconMap = {
  react: ReactOriginal,
  "next.js": NextjsOriginal,
  typescript: TypescriptOriginal,
  javascript: JavascriptOriginal,
  html: Html5Original,
  css: Css3Original,
  tailwindcss: TailwindcssOriginal,
  "material-ui": MaterialuiOriginal,
  "node.js": NodejsOriginal,
  "c++": CplusplusOriginal,
  supabase: SupabaseOriginal,
  unity: UnityOriginal,
  reactrouter: ReactrouterOriginal,
  vite: ViteOriginal,
  "c#": CsharpOriginal,
};

const categorizeTechnologies = (techStack) => {
// Create an object to store categorized technologies
  const categorized = {
    frontend: [],
    backend: [],
    database: [],
    other: [],
  };

// Categorize each technology
  techStack.forEach((tech) => {
    const lowerTech = tech.toLowerCase();
    const category = Object.keys(categoryMap).find((key) =>
      categoryMap[key].includes(lowerTech)
    );

    if (category) {
      categorized[category].push(tech);
    } else {
      categorized.other.push(tech); // Put uncategorized techs into "other"
    }
  });

  return categorized;
};

const isValidMediaType = (mediaUrl) => {
  // Remove query parameters from the URL
  const cleanUrl = mediaUrl.split('?')[0];
  // Extract the file extension
  const fileExtension = cleanUrl.split('.').pop().toLowerCase();
  // Valid extensions for videos and images
  const validExtensions = ['mov', 'mp4', 'webm', 'ogg', 'jpeg', 'jpg', 'png', 'gif', 'webp'];
  return validExtensions.includes(fileExtension);
};

function Project({ project }) {
  const { name, descriptionLong, keyFeatures, codeLink, liveLink, techStack, media } = project;
  const categorizedTech = categorizeTechnologies(techStack);

// Function to render icons
  const renderIcons = (technologies) =>
    technologies.map((tech) => {
      const IconComponent = techIconMap[tech.toLowerCase()];
      return IconComponent ? (
        <IconComponent key={tech} title={tech} size="2rem" />
      ) : (
        <span key={tech}>{tech}</span> // Fallback for missing icons
      );
    });

    return (
      <div className="col-span-3 px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-baseline mb-10">
  {/* Title */}
  <h1 className="text-2xl sm:text-3xl lg:text-4xl dark:text-accent-400 text-accent-600 font-medium">
    {name}
  </h1>

  {/* Links Section */}
  <div className="flex sm:flex-row gap-4 sm:gap-6 sm:items-center">
    {/* Code Link */}
    {codeLink && (
      <Link
        href={codeLink}
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Security best practice
        className="dark:bg-accent-500 bg-accent-500 px-4 py-2 dark:text-primary-800 text-primary-200 text-sm font-medium hover:dark:bg-accent-600 hover:bg-accent-400 transition-all"
      >
        Code
      </Link>
    )}

    {/* Live Link */}
    {liveLink && (
      <Link
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="dark:bg-accent-500 bg-accent-500 px-4 py-2 dark:text-primary-800 text-primary-200 text-sm font-medium hover:dark:bg-accent-600 hover:bg-accent-400 transition-all"
      >
        Live
      </Link>
    )}
  </div>

</div>

      <p className="text-lg dark:text-primary-300 text-primary-700 mb-10">
        <TextExpander>{descriptionLong}</TextExpander>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-10 md:gap-20 border dark:border-primary-800 border-primary-200 py-3 px-4 md:px-10 mb-24">
        {categorizedTech.frontend.length > 0 && (
          <div>
            <h3 className="font-bold mb-2">Frontend</h3>
            <div className="flex gap-4 flex-wrap">{renderIcons(categorizedTech.frontend)}</div>
          </div>
        )}

      {/* Backend Section */}
        {categorizedTech.backend.length > 0 && (
          <div>
            <h3 className="font-bold mb-2">Backend</h3>
            <div className="flex gap-4 flex-wrap">{renderIcons(categorizedTech.backend)}</div>
          </div>
        )}

      {/* Database Section */}
        {categorizedTech.database.length > 0 && (
          <div>
            <h3 className="font-bold mb-2">Database</h3>
            <div className="flex gap-4 flex-wrap">{renderIcons(categorizedTech.database)}</div>
          </div>
        )}

      {/* Other Tools/Libraries Section */}
        {categorizedTech.other.length > 0 && (
          <div>
            <h3 className="font-bold mb-2">Other Tools, Technologies</h3>
            <div className="flex gap-4 flex-wrap">{renderIcons(categorizedTech.other)}</div>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex-1">
          <h3 className="text-accent-500 dark:text-accent-500 font-semibold text-2xl mb-3">
            Key Features
          </h3>
          <ul className="list-disc list-inside text-md dark:text-primary-300 text-primary-700 mb-10">
            {keyFeatures?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {media && (
          <div className="flex-1 w-full max-w-full md:max-w-[50%]">
            {isValidMediaType(media) ? (
              media.match(/\.(mp4|webm|ogg|mov)(\?.*)?$/i) ? (
                <video
                  controls
                  loop
                  muted
                  className="w-full h-auto"
                  src={media}
                  alt="Project Video"
                />
              ) : media.match(/\.(jpeg|jpg|png|gif|webp)(\?.*)?$/i) ? (
                <img
                  className="w-full h-auto rounded-md"
                  src={media}
                  alt="Project Image"
                />
              ) : (
                <p>Unsupported media type</p>
              )
            ) : (
              <p>Invalid media URL</p>
            )}
          </div>
        )}
      </div>

    </div>
  );
}

export default Project