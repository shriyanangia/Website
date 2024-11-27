import BookList from "@/app/_components/BookList";


export default function Page()
{

    return (
        <div>
        <h1 className="text-4xl mb-5 dark:text-accent-400 text-accent-600 font-medium">
        Bookshelf
      </h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Currently Reading</h2>
       <BookList read={false} />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Read</h2>
        <BookList read={true} />
      </section>
        </div>
    )
}