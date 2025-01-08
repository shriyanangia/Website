import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default async function Navigation() {

  return (
    <nav className="z-10 text-xl ml-auto">
      <ul className="flex gap-8 sm:gap-16 items-center">
      <li>
          <Link
            href="/"
            className="hover:text-accent-600 hover:dark:text-accent-400 transition-colors"
          >
            Home
          </Link>
        </li>


        <li>
          <Link
            href="/work"
            className="hover:text-accent-600 hover:dark:text-accent-400 transition-colors"
          >
            Work
          </Link>
        </li>


        <li>
          <Link
            href="/about"
            className="hover:text-accent-600 hover:dark:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>

      <li>
        <DarkModeToggle/>
      </li>
        
      </ul>
    </nav>
  );
}
