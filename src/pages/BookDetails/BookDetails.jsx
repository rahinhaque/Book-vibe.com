import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();

  const book = books.find((b) => b.bookId == id);

  if (!book) {
    return (
      <div className="min-h-screen bg-[#0A071E] flex items-center justify-center">
        <h2 className="text-white text-2xl font-bold">Book Not Found</h2>
      </div>
    );
  }

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="min-h-screen bg-[#0A071E] py-12 lg:py-24">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Side: Image */}
          <div className="flex-1 w-full bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-20 flex items-center justify-center relative group overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <img
              src={image}
              alt={bookName}
              className="w-full max-w-sm h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Right Side: Details */}
          <div className="flex-1 w-full flex flex-col z-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight font-serif">
              {bookName}
            </h1>
            <p className="text-white/60 text-xl font-medium mb-6">
              By : <span className="text-white/90">{author}</span>
            </p>

            <div className="h-px w-full bg-white/10 mb-4" />
            <p className="text-white/80 text-xl font-medium mb-4">{category}</p>
            <div className="h-px w-full bg-white/10 mb-6" />

            <div className="mb-8">
              <p className="text-white/90 leading-relaxed text-lg italic mb-6">
                <span className="text-white font-bold not-italic">
                  Review :{" "}
                </span>
                {review}
              </p>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-white font-bold text-lg">Tag</span>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 rounded-full bg-[#23BE0A]/10 text-[#23BE0A] text-sm font-bold uppercase tracking-wider border border-[#23BE0A]/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-white/10 mb-8" />

            {/* Stats Table-like structure */}
            <div className="space-y-4 mb-10 max-w-sm">
              <div className="flex items-center justify-between gap-8">
                <p className="text-white/60 text-lg">Number of Pages:</p>
                <p className="text-white font-bold text-lg">{totalPages}</p>
              </div>
              <div className="flex items-center justify-between gap-8">
                <p className="text-white/60 text-lg">Publisher:</p>
                <p className="text-white font-bold text-lg">{publisher}</p>
              </div>
              <div className="flex items-center justify-between gap-8">
                <p className="text-white/60 text-lg">Year of Publishing:</p>
                <p className="text-white font-bold text-lg">
                  {yearOfPublishing}
                </p>
              </div>
              <div className="flex items-center justify-between gap-8">
                <p className="text-white/60 text-lg">Rating:</p>
                <p className="text-white font-bold text-lg flex items-center gap-1">
                  {rating} <span className="text-yellow-500">★</span>
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-8 py-3.5 rounded-xl bg-white text-[#0A071E] font-bold text-lg hover:bg-white/90 transition-all active:scale-95 shadow-lg shadow-white/5">
                Read
              </button>
              <button className="px-8 py-3.5 rounded-xl bg-[#59C6D2] hover:bg-[#59C6D2]/90 text-white font-bold text-lg shadow-lg shadow-[#59C6D2]/20 transition-all active:scale-95">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
