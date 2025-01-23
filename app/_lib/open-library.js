import axios from 'axios';

const GOOGLE_BOOKS_API_BASE = 'https://www.googleapis.com/books/v1/volumes';
const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_KEY;

export async function fetchBookByISBN(isbn) {
  try {
    // Construct the API request URL
    const response = await axios.get(GOOGLE_BOOKS_API_BASE, {
      params: {
        q: `isbn:${isbn}`,
        key: GOOGLE_BOOKS_API_KEY,
      },
    });
    
    const book = response.data.items?.[0]; // Check if there's a matching book
    if (book) {
      return {
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        publisher: book.volumeInfo.publisher,
        publishedDate: book.volumeInfo.publishedDate,
        description: book.volumeInfo.description,
        categories: book.volumeInfo.categories,
        pageCount: book.volumeInfo.pageCount,
        thumbnail: book.volumeInfo.imageLinks?.thumbnail,
        language: book.volumeInfo.language,
      };
    } else {
      console.log(`No book found for ISBN: ${isbn}`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching book with ISBN ${isbn}:`, error.message);
    return null;
  }
}
