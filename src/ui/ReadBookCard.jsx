import React from "react";
import { Link } from "react-router";

const ReadBookCard = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-6 flex flex-col lg:flex-row gap-8 items-center lg:items-start transition-all duration-300 hover:bg-white/[0.08] group">
      {/* Image Side */}
      <div className="w-full lg:w-60 h-72 bg-[#1a1a2e] rounded-2xl p-8 flex items-center justify-center relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img
          src={image}
          alt={bookName}
          className="h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Side */}
      <div className="flex-1 w-full">
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 font-serif leading-tight group-hover:text-purple-300 transition-colors">
          {bookName}
        </h3>
        <p className="text-white/60 font-medium mb-6">
          By : <span className="text-white/90">{author}</span>
        </p>

        <div className="flex flex-wrap items-center gap-6 mb-6 text-sm lg:text-base">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold">Tag</span>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 rounded-full bg-[#23BE0A]/10 text-[#23BE0A] text-xs font-bold uppercase tracking-wider border border-[#23BE0A]/20"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Year of Publishing: {yearOfPublishing}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 mb-8 text-sm lg:text-base text-white/60 pb-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span>Publisher: {publisher}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Page {totalPages}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <span className="px-5 py-2.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold border border-blue-500/20">
            Category: {category}
          </span>
          <span className="px-5 py-2.5 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-semibold border border-yellow-500/20">
            Rating: {rating}
          </span>
          <Link
            to={`/booksdetails/${bookId}`}
            className="px-6 py-2.5 rounded-full bg-[#23BE0A] text-white text-sm font-bold hover:bg-[#23BE0A]/90 transition-all active:scale-95"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBookCard;
