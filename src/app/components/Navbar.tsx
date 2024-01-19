"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Logo from "public/logo.svg";
import MenuIcon from "public/menu.svg";
import CloseMenuIcon from "public/closeMenuIcon.svg";
import Button from "./ui/Button";

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
      document.getElementsByTagName("body")[0].style.overflow =
        navMenuRef.current.dataset.show === "false" ? "" : "hidden";
    }
  };

  return (
    <>
      <nav className="w-screen fixed top-0 z-10 backdrop-blur flex-none transition-colors duration-500 lg:z-40 lg:border-b lg:border-primary-400/10 bg-white supports-backdrop-blur:bg-white">
        <div className="max-w-7xl h-full flex justify-between items-center px-3 md:px-6 lg:px-10 xl:mx-auto">
          {/* logo */}
          <Image src={Logo} alt="logo" className="md:w-28 md:h-auto lg:w-14" />

          {/* links */}
          <ul className="hidden lg:flex gap-10 font-bold">
            <li>
              <a href="#hero" className=" text-primary-400">
                HOW IT WORKS
              </a>
            </li>
            <li>
              <a href="#about" className=" text-primary-400">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#work" className=" text-primary-400">
                WORK
              </a>
            </li>
            <li>
              <a href="#pricing" className=" text-primary-400">
                PRICING
              </a>
            </li>
            <li>
              <a href="#blog" className=" text-primary-400">
                BLOG
              </a>
            </li>
            <li>
              <a href="#faq" className=" text-primary-400">
                FAQ
              </a>
            </li>
          </ul>

          <Button className="font-bold py-2 px-5 hidden lg:block">
            GET STARTED
          </Button>

          {/* menu icon  */}
          <button
            onClick={() => onOpenCloseClick()}
            ref={openMenuRef}
            className="data-[show=true]:hidden lg:!hidden"
            data-show="false"
          >
            <Image
              src={MenuIcon}
              alt="menu"
              className="h-8 w-auto md:h-16 md:w-auto"
            />
          </button>
        </div>
      </nav>

      <div
        className="fixed h-screen w-screen bg-primary-100/50 backdrop-blur-sm z-20 data-[show=false]:hidden overflow-hidden lg:!hidden"
        ref={blurOverlayRef}
        data-show="false"
        onClick={() => onOpenCloseClick()}
      ></div>

      {/* nav */}
      <div
        className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 md:p-10 text-base font-semibold text-slate-900 bg-primary-100 flex flex-col gap-3  md:gap-6 z-40 data-[show=false]:hidden lg:!hidden"
        data-show="false"
        ref={navMenuRef}
      >
        {/* close menu icon  */}
        <button
          className="self-end"
          onClick={() => onOpenCloseClick()}
          ref={closeMenuRef}
        >
          <Image
            src={CloseMenuIcon}
            alt="close menu"
            className="w-4 h-4 md:h-8 md:w-8"
          />
        </button>

        {/* links */}
        <ul className="flex flex-col gap-8 md:gap-16 font-bold">
          <li>
            <a
              href="#hero"
              className=" text-white-100 md:text-3xl"
              onClick={() => onOpenCloseClick()}
            >
              HOW IT WORKS
            </a>
          </li>
          <li>
            <a
              href="#about"
              className=" text-white-100 md:text-3xl"
              onClick={() => onOpenCloseClick()}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#work"
              className=" text-white-100 md:text-3xl"
              onClick={() => onOpenCloseClick()}
            >
              WORK
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className=" text-white-100 md:text-3xl"
              onClick={() => onOpenCloseClick()}
            >
              PRICING
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className=" text-white-100 md:text-3xl"
              onClick={() => onOpenCloseClick()}
            >
              BLOG
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className=" text-white-100 md:text-3xl"
              onClick={() => onOpenCloseClick()}
            >
              FAQ
            </a>
          </li>
          <li>
            <Button className="font-bold py-2 px-5">GET STARTED</Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
