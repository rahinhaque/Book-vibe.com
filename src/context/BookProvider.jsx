// bookProvider.jsx

import React, { createContext, useState } from "react";
import { Bounce, toast } from "react-toastify";

export const BookContext = createContext(); // PascalCase ✅

const BookProvider = ({ children }) => {
  // PascalCase ✅
  const [storedBook, setStoredBook] = useState([]);
  const [wishList  , setWishList] = useState([]);

  const handleMarkAsRead = (newBook) => {
    const isBookExist = storedBook.find(
      (book) => book.bookId === newBook.bookId,
    );
    if (isBookExist) {
      toast.error(`${newBook.bookName} already exist in the readlist`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      `${newBook.bookName} already exist in the read list !`;
    } else {
      setStoredBook([...storedBook, newBook]);
      toast.success(`🦄 ${newBook.bookName} added to the readlist`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      `${newBook.bookName} is added to the Read List`;
    }
  };

  const handleWishList = (newBook) => {
    // Check if the book is already in the Read List
    const isExistInReadList = storedBook.find(book => book.bookId === newBook.bookId);

    if (isExistInReadList) {
      toast.error(`"${newBook.bookName}" is already in your Read List!`, {
        position: "top-center",
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    // Check if the book is already in the Wishlist
    const isBookExistInWishList = wishList.find(
      (book) => book.bookId === newBook.bookId,
    );

    if (isBookExistInWishList) {
      toast.error(`"${newBook.bookName}" is already in your Wishlist!`, {
        position: "top-center",
        theme: "colored",
        transition: Bounce,
      });
    } else {
      setWishList([...wishList, newBook]);
      toast.success(`🦄 "${newBook.bookName}" added to the Wishlist`, {
        position: "top-center",
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  const data = {
    storedBook,
    setStoredBook,
    handleMarkAsRead,
    handleWishList,
    wishList , setWishList
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
