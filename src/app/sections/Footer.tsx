import Image from "next/image";
import React from "react";
import EmailIcon from "public/emailIcon.svg";
import InstagramIcon from "public/instagramIcon.svg";
import LinkedinIcon from "public/linkedInIcon.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-screen bg-primary-100 px-3 py-10 flex flex-col gap-8 z-5 items-center">
      <h2 className="font-extrabold text-4xl text-white-100">
        the design project
      </h2>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <Image src={EmailIcon} alt="email" className="w-8 h-auto"/>
          <span className="text-white-100">hello@designproject.io</span>
        </div>
        <div className="flex gap-5">
          <Image src={LinkedinIcon} alt="linkedin" className="w-8 h-auto"/>
          <span className="text-white-100">@designproject.io</span>
        </div>
        <div className="flex gap-5">
          <Image src={InstagramIcon} alt="instagram" className="w-8 h-auto"/>
          <span className="text-white-100">The Design Project</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
