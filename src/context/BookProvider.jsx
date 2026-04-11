// bookProvider.jsx

import React, { createContext, useState} from "react";

export const BookContext = createContext(); // PascalCase ✅

const BookProvider = ({ children }) => {
  // PascalCase ✅
  const [storedBook, setStoredBook] = useState([]);

  

  const handleMarkAsRead = (newBook) => {
    
    const isBookExist = storedBook.find(
      (book) => book.bookId === newBook.bookId,
    );
    if (isBookExist) {
      alert(`${newBook.bookName} already exist in the read list !`);
    } else {
     setStoredBook([...storedBook, newBook]);
     alert(`${newBook.bookName} is added to the Read List`)
    }
  };
  const data ={
   storedBook ,  setStoredBook , handleMarkAsRead
  }

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};


export default BookProvider;
