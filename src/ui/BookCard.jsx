import React from 'react';
import { Link } from 'react-router';

const BookCard = ({book}) => {
 return (
   <Link
     to={`/booksdetails/${book.bookId}`}
     key={book.bookId}
     className="group bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-3 hover:bg-white/8 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col h-full"
   >
     {/* Image Container */}
     <div className="bg-[#1a1a2e] rounded-2xl p-8 mb-6 flex items-center justify-center overflow-hidden aspect-4/3 relative">
       <div className="absolute inset-0 bg-linear-to-tr from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
       <img
         src={book.image}
         alt={book.bookName}
         className="h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110"
       />
     </div>

     {/* Content */}
     <div className="flex-1 flex flex-col">
       {/* Tags */}
       <div className="flex flex-wrap gap-2 mb-4">
         {book.tags.map((tag, index) => (
           <span
             key={index}
             className="px-4 py-1.5 rounded-full bg-[#23BE0A]/10 text-[#23BE0A] text-xs font-bold uppercase tracking-wider border border-[#23BE0A]/20"
           >
             {tag}
           </span>
         ))}
       </div>

       {/* Title */}
       <h3 className="text-2xl font-bold mb-2 leading-tight font-serif bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
         {book.bookName}
       </h3>

       {/* Author */}
       <p className="text-white/60 font-medium mb-6">
         By : <span className="text-white/80">{book.author}</span>
       </p>

       {/* Divider */}
       <div className="mt-auto pt-6 border-t border-dashed border-white/10 flex items-center justify-between text-white/60 font-medium">
         <span>{book.category}</span>
         <div className="flex items-center gap-1.5">
           <span className="text-white">{book.rating.toFixed(1)}</span>
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-5 w-5 text-yellow-500"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.482-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
             />
           </svg>
         </div>
       </div>
     </div>
   </Link>
 );
};

export default BookCard;