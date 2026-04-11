import React, { use, useState } from "react";
import BookCard from "../../ui/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  const [query , setQuery] = useState("");

  const filteredBook = books.filter((book) => {
    if(!query) return  true;
    const q = query.toLowerCase();
    return (
      book.bookName?.toLowerCase().includes(q) ||
      book.author?.toLowerCase().includes(q) ||
      book.category?.toLowerCase().includes(q)
    );
  });

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

        <div className="mb-10 max-w-xl mx-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, author, or genre..."
            className="w-full px-5 py-3 rounded-xl bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-purple-400"
          />
        </div>

        <p className="text-white/40 text-sm text-center mb-8">
          Showing {filteredBook.length} book
          {filteredBook.length !== 1 ? "s" : ""}
        </p>

        <div>
          {filteredBook.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBook.map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
            </div>
          ) : (
            <p className="text-center text-white/50 text-lg mt-12">
              No books found for "{query}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
