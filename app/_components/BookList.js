import { getBooks } from "@/app/_lib/data-service";
import BookComponent from "./Book";

async function BookList ({read})
{

    const books = await getBooks();

    if(!books.length) return null;

    let displayedBooks;
    if (read)
    displayedBooks = books.filter(
      (book) => book.read === true
    );

    if (!read)
    displayedBooks = books.filter(
        (book) => book.read === false
    );

    console.log(displayedBooks)

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
        {displayedBooks.map((book) => (
          <BookComponent book={book} key={book.id} />
        ))}
      </div>

    )

}

export default BookList;