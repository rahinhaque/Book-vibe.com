import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";

const Books = () => {
   const {  storedBook } = useContext(BookContext);
   console.log(storedBook);

  return <div>
      Books here 
   </div>;
};

export default Books;
