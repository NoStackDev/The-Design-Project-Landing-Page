"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Logo from "public/logo.svg";
import MenuIcon from "public/menu.svg";
import CloseMenuIcon from "public/closeMenuIcon.svg";

type Props = {};

const Navbar = (props: Props) => {
  const openMenuRef = useRef<HTMLButtonElement>(null);
  const closeMenuRef = useRef<HTMLButtonElement>(null);
  const navMenuRef = useRef<HTMLDivElement>(null);
  const blurOverlayRef = useRef<HTMLDivElement>(null);

  const onOpenCloseClick = () => {
    if (navMenuRef.current && openMenuRef.current && blurOverlayRef.current) {
      openMenuRef.current.dataset.show =
        openMenuRef.current.dataset.show === "false" ? "true" : "false";
      navMenuRef.current.dataset.show =
        navMenuRef.current.dataset.show === "false" ? "true" : "false";
      blurOverlayRef.current.dataset.show =
        blurOverlayRef.current.dataset.show === "false" ? "true" : "false";
    }
  };

  return (
    <>
      <nav className="fixed top-0 z-10 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-40 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent flex justify-between items-center">
        {/* logo */}
        <Image src={Logo} alt="logo" />

        {/* menu icon  */}
        <button
          onClick={() => onOpenCloseClick()}
          ref={openMenuRef}
          className="data-[show=true]:hidden"
          data-show="false"
        >
          <Image src={MenuIcon} alt="menu" className="h-8 w-auto" />
        </button>
      </nav>

      <div
        className="fixed h-screen w-screen bg-primary-100/50 backdrop-blur-sm z-20 data-[show=false]:hidden"
        ref={blurOverlayRef}
        data-show="false"
        onClick={() => onOpenCloseClick()}
      ></div>

      {/* nav */}
      <div
        className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 bg-primary-100 flex flex-col gap-3 z-40 data-[show=false]:hidden"
        data-show="false"
        ref={navMenuRef}
      >
        {/* close menu icon  */}
        <button
          className="self-end"
          onClick={() => onOpenCloseClick()}
          ref={closeMenuRef}
        >
          <Image src={CloseMenuIcon} alt="close menu" className="w-4 h-4" />
        </button>

        {/* links */}
        <ul className="flex flex-col gap-8 text-black-100 font-bold">
          <li>
            <a
              href="#"
              className=" text-white-100"
              onClick={() => onOpenCloseClick()}
            >
              HOW IT WORKS
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" text-white-100"
              onClick={() => onOpenCloseClick()}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" text-white-100"
              onClick={() => onOpenCloseClick()}
            >
              WORK
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className=" text-white-100"
              onClick={() => onOpenCloseClick()}
            >
              PRICING
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" text-white-100"
              onClick={() => onOpenCloseClick()}
            >
              BLOG
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
