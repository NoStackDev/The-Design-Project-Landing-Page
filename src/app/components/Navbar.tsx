"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "public/logo.svg";
import MenuIcon from "public/menu.svg";
import CloseMenuIcon from "public/closeMenuIcon.svg";

type Props = {};

const Navbar = (props: Props) => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-20 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-40 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent flex justify-between items-center">
        {/* logo */}
        {showNavbar ? null : <Image src={Logo} alt="logo" />}

        {/* overlay */}
        {showNavbar ? (
          <div className="fixed inset-0 z-30 h-screen  backdrop-blur-sm"></div>
        ) : null}

        {/* menu icon  */}
        {showNavbar ? null : (
          <button onClick={() => setShowNavbar(!showNavbar)}>
            <Image src={MenuIcon} alt="menu" className="h-8 w-auto" />
          </button>
        )}

        {/* nav */}
        {showNavbar ? (
          <div className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5 flex flex-col gap-3 z-40">
            {/* close menu icon  */}
            <button
              className="self-end"
              onClick={() => setShowNavbar(!showNavbar)}
            >
              <Image src={CloseMenuIcon} alt="close menu" className="w-4 h-4" />
            </button>

            {/* links */}
            <ul className="flex flex-col gap-8 text-black-100 font-bold">
              <li>
                <Link href="#">HOW IT WORKS</Link>
              </li>
              <li>
                <Link href="#">ABOUT</Link>
              </li>
              <li>
                <Link href="#">WORK</Link>
              </li>
              <li>
                <Link href="#">PRICING</Link>
              </li>
              <li>
                <Link href="#">BLOG</Link>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
