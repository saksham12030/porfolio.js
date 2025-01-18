"use client"
import React from 'react'
import {useState} from "react"
import Link from "next/link";
import NavLink from './NavLink';

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Menuoverlay from './Menuoverlay';
const navlinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const NavSec = () => {
  const [navbarOpen,setnavbarOpen]=useState(false);

  return (
    <nav className="fixed top-0 border border-[#33353F] right-0 left-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="container lg:py-4 flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <Link
          href="/"
          className="md:text-5xl text-2xl text-white font-semibold"
        >
          Logo
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => {
                setnavbarOpen(false);
              }}
              className="flex items-center px-3 py-2 border border-slate-200 rounded hover:text-white hover:border-white text-slate-200"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => {
                setnavbarOpen(true);
              }}
              className="flex items-center px-3 py-2 border border-slate-200 rounded hover:text-white hover:border-white text-slate-200"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex flex-row p-4 md:p-0 md:space-x-8 mt-0 ">
            {navlinks.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {navbarOpen ? <Menuoverlay link={navlinks} /> : null}
    </nav>
  );
}

export default NavSec