import React, { useState } from "react";
import { NavLink, Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white font-semibold text-base transition-colors duration-200"
      : "text-white/70 text-base font-medium hover:text-white transition-colors duration-200";

  const links = (
    <>
      <li>
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/books" className={linkClass}>
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink to="/pages-to-read" className={linkClass}>
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-[#0A071E] border-b border-white/5 py-4">
      <div className="container mx-auto px-6 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 font-serif text-2xl font-bold text-white hover:opacity-90 transition-opacity"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-[#6D28D9] to-[#3B82F6] rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          Book Vibe
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-10 list-none">
          {links}
        </ul>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-white font-semibold px-6 py-2.5 rounded-xl border border-white/20 hover:bg-white/5 transition-all duration-300">
            Sign In
          </button>
          <button className="text-white font-semibold px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#4F46E5] hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
            Sign Up
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0A071E] border-t border-white/5 px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <ul className="list-none flex flex-col gap-6">
            {links}
          </ul>
          <div className="flex flex-col gap-4 pt-6 border-t border-white/5">
            <button className="w-full text-white font-semibold py-3 rounded-xl border border-white/20 hover:bg-white/5">
              Sign In
            </button>
            <button className="w-full text-white font-semibold py-3 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#4F46E5]">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
