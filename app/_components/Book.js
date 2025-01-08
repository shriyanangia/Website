"use client";

import { useEffect, useState } from "react";
import { fetchBookByISBN } from "../_lib/open-library";
import Image from "next/image";

const BookComponent = ({ book }) => {
  const [coverUrl, setCoverUrl] = useState(null);
  const [bookAttributes, setBookAttributes] = useState(null);
  const [showModal, setShowModal] = useState(false); // State to toggle modal visibility
  const { isbn} = book;

  console.log(book);

  // Fetch book information when the component mounts
  useEffect(() => {
    const fetchCover = async () => {
      const googleBook = await fetchBookByISBN(isbn);
      console.log(googleBook)
      if (googleBook) 
      {
        setBookAttributes(googleBook)
      }
      else (
        setBookAttributes(null)
      )
      console.log(googleBook?.thumbnail); // Ensure that googleBook exists before accessing thumbnail
      if (googleBook?.thumbnail) {
        setCoverUrl(googleBook.thumbnail);
      } else {
        setCoverUrl(null);
      }
    };

    fetchCover();
  }, [isbn]); // This effect will run when the 'isbn' prop changes

   // Toggle modal visibility
   const handleClick = () => {
    setShowModal(true);
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Prevent event propagation when clicking inside modal
  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the overlay
  };

  return (
    <div style={{ cursor: "pointer" }} onClick={handleClick}>

        {coverUrl ? (
        <Image
        src={coverUrl}
        alt="Book Thumbnail"
        width={100} 
        height={100}
        className="object-cover rounded-lg transition-all group-hover:opacity-80"
      />
      ) : (
        <div>Book Not Found</div> // Show loading message or placeholder
      )}


        {/* Modal for showing book details */}
        {showModal && bookAttributes && (
        <>
          {/* Overlay to blur background */}
          <div
            className="fixed inset-0 bg-primary-50 dark:bg-primary-950 opacity-50 z-10"
            onClick={closeModal} // Close modal when clicking outside
          ></div>

<div
  className="fixed inset-0 flex items-center justify-center z-20"
  onClick={handleModalClick} // Prevent closing the modal when clicking inside
>
  <div
    className="bg-primary-950 dark:bg-primary-50 p-6 rounded-lg shadow-lg w-[400px] h-[500px] overflow-y-auto"
  >
    <h3 className="font-semibold text-primary-100 dark:text-primary-900 text-xl mb-3">
      {bookAttributes?.title}
    </h3>
    <p className="text-primary-100 dark:text-primary-900"> 
      <strong>Authors:</strong> {bookAttributes?.authors?.join(", ")}
    </p>
    <p className="text-primary-200 dark:text-primary-900">
      <strong>Publisher:</strong> {bookAttributes?.publisher}
    </p>
    <p className="text-primary-200 dark:text-primary-900">
      <strong>Language:</strong> {bookAttributes?.language}
    </p>
    <p className="text-primary-200 dark:text-primary-900">
      <strong>Categories:</strong> {bookAttributes?.categories?.join(", ")}
    </p>
    <p className="text-primary-200 dark:text-primary-900">
      <strong>Description:</strong> {bookAttributes?.description}
    </p>
    <button
      onClick={closeModal}
      className="mt-4 py-2 px-4 rounded bg-accent-500 text-primary-900 text-lg font-semibold hover:bg-accent-600 transition-all"
    >
      Close
    </button>
  </div>
</div>

        </>
      )}

    </div>
  );
};

export default BookComponent;