import React from "react";
import { NavLink, Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border border-[#23BE0A] text-[#23BE0A] bg-white font-semibold text-lg px-5 py-2 rounded-lg"
              : "text-[#131313CC] text-lg hover:text-[#23BE0A] hover:bg-[#23BE0A]/10 rounded-lg transition-colors duration-200 px-5 py-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listed-books"
          className={({ isActive }) =>
            isActive
              ? "border border-[#23BE0A] text-[#23BE0A] bg-white font-semibold text-lg px-5 py-2 rounded-lg"
              : "text-[#131313CC] text-lg hover:text-[#23BE0A] hover:bg-[#23BE0A]/10 rounded-lg transition-colors duration-200 px-5 py-2"
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pages-to-read"
          className={({ isActive }) =>
            isActive
              ? "border border-[#23BE0A] text-[#23BE0A] bg-white font-semibold text-lg px-5 py-2 rounded-lg"
              : "text-[#131313CC] text-lg hover:text-[#23BE0A] hover:bg-[#23BE0A]/10 rounded-lg transition-colors duration-200 px-5 py-2"
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="navbar my-2 rounded-xl border border-black/5 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-xl w-60 gap-2"
              >
                {links}
                <li className="mt-1">
                  <div className="flex gap-2 pt-2 border-t">
                    <button className="btn btn-sm flex-1 bg-[#23BE0A] hover:bg-[#23BE0A]/90 text-white border-none">
                      Sign In
                    </button>
                    <button className="btn btn-sm flex-1 bg-gradient-to-r from-[#59C6D2] to-[#48A9C5] hover:from-[#59C6D2]/90 hover:to-[#48A9C5]/90 text-white border-none">
                      Sign Up
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <Link
              to="/"
              className="text-2xl lg:text-3xl font-bold text-[#131313] hover:opacity-80 transition-opacity"
            >
              Book Vibe
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
          </div>
          <div className="navbar-end gap-3 hidden lg:flex">
            <button className="btn bg-[#23BE0A] hover:bg-[#23BE0A]/90 text-white text-base font-semibold border-none px-6 h-auto py-3 min-h-0 rounded-lg shadow-sm">
              Sign In
            </button>
            <button className="btn bg-gradient-to-r from-[#59C6D2] to-[#48A9C5] hover:from-[#59C6D2]/90 hover:to-[#48A9C5]/90 text-white text-base font-semibold border-none px-6 h-auto py-3 min-h-0 rounded-lg shadow-sm">
              Sign Up
            </button>
          </div>
          <div className="navbar-end gap-2 lg:hidden">
            <button className="btn btn-sm bg-[#23BE0A] hover:bg-[#23BE0A]/90 text-white border-none px-4">
              Sign In
            </button>
            <button className="btn btn-sm bg-gradient-to-r from-[#59C6D2] to-[#48A9C5] hover:from-[#59C6D2]/90 hover:to-[#48A9C5]/90 text-white border-none px-4">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
