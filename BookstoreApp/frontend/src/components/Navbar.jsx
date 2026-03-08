import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Login from './Login';
import Logout from './Logout';
import { useAuth } from '../context/AuthProvider';

function Navbar() {
  const [authUser, setAuthUser]=useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = (
    <>
     <div className="flex items-center lg:gap-2 md:gap-2 gap-2"> {/* Gap badha diya hai taaki chipke na */}
    {[
      { name: "Home", path: "/" },
      { name: "Course", path: "/course" },
      { name: "Contact", path: "/contact" },
      { name: "About", path: "/about" },
    ].map((item) => (
      <li key={item.name} className="list-none">
        <Link
          to={item.path}
          className="relative px-4 py-2 text-[16px] font-semibold text-gray-700 dark:text-gray-200 
                     group transition-all duration-300 ease-in-out
                     hover:text-blue-600 dark:hover:text-sky-400
                     active:scale-90 inline-block cursor-pointer"
        >
          {item.name}
          
          {/* Animated Blue Mix Underline */}
          <span className="absolute bottom-0 left-0 w-0 h-[3px] rounded-full
                           bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 
                           transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
    ))}
  </div>

    </>
  );

  return (
    <>
      <div className={`max-w-full container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 dark:bg-slate-900 dark:text-white ${
        sticky
          ? "sticky-navbar shadow-md bg-base-300 dark:bg-slate-900 dark:text-white ease-in-out"
          : ""
      }`}>
        <div className="navbar px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 dark:bg-slate-800 rounded-box mt-3 w-52 p-2 shadow z-50">
                {navItems}
              </ul>
            </div>
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
             BookStore
            </h1>
              {/* <a className="text-2xl font-bold cursor-pointer">BookStore</a> */}
          </div>

          <div className="navbar-end gap-4">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center px-3">
              <label className="group px-3 py-2 border rounded-md flex items-center gap-2 h-9 w-40 lg:w-72 
               bg-gray-50/50 dark:bg-slate-800/50 
               border-gray-200 dark:border-slate-700 
               transition-all duration-300 ease-in-out
               focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 
               dark:focus-within:border-blue-400 dark:focus-within:ring-blue-400/20
               hover:border-gray-400 dark:hover:border-slate-500 cursor-text">

                <input type="search" className="grow outline-none bg-transparent text-sm" placeholder="Search" />
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
              </label>
            </div>

            {/* Theme Toggle */}
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={() => setTheme(theme === "light" ? "dark" : "light")}
              />
              {/* Sun Icon (Light Mode) */}
              <svg className="swap-off h-7 w-7 fill-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              {/* Moon Icon (Dark Mode) */}
              <svg className="swap-on h-7 w-7 fill-sky-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
              {/* Theme Toggle ke thik niche ye dalo */}
            <div className="">
            {authUser ? (
            <Logout />
             ) : (
               <>
              <button
             className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-all active:scale-95 shadow-lg cursor-pointer"
             onClick={() => document.getElementById("my_modal_3").showModal()}
             >
              Login
             </button>
             <Login />
             </>
              )}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;



