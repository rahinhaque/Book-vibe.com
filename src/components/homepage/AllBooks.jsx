import React, { use } from "react";
import BookCard from "../../ui/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);

  return (
    <div className="w-full bg-[#0A071E] py-20">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-serif">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Library
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Discover your next great read from our curated collection of
            world-class literature across all genres.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
