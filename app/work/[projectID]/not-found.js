import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        This project could not be found :(
      </h1>
      <Link
        href="/work"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Back to work
      </Link>
    </main>
  );
}

export default NotFound;
