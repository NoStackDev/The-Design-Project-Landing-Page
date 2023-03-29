import Image from "next/image";
import React from "react";
import EmailIcon from "public/emailIcon.svg";
import InstagramIcon from "public/instagramIcon.svg";
import LinkedinIcon from "public/linkedInIcon.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer id="footer" className="bg-primary-100 px-3md:px-6 py-10 flex flex-col gap-8 z-5 items-center">
      <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-white-100">
        the design project
      </h2>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex gap-5">
          <Image src={EmailIcon} alt="email" className="w-8 m:w-32 h-auto" />
          <span className="text-white-100 text-base md:text-xl lg:text-2xl">hello@designproject.io</span>
        </div>
        <div className="flex gap-5">
          <Image src={LinkedinIcon} alt="linkedin" className="w-8 m:w-32 h-auto" />
          <span className="text-white-100 text-base md:text-xl lg:text-2xl">@designproject.io</span>
        </div>
        <div className="flex gap-5">
          <Image src={InstagramIcon} alt="instagram" className="w-8 m:w-32 h-auto" />
          <span className="text-white-100 text-base md:text-xl lg:text-2xl">The Design Project</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
