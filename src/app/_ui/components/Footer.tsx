import React from "react";
import { TiSocialYoutube, TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  function handleClick() {
    alert("Thanks for following.");
  }

  return (
    <footer className="absolute bottom-0  w-full h-24 p-4 flex justify-center bg-gray-800 shadow-lg shadow-grey-500/50 text-white">
      <div className="text-2xl flex w-full items-center justify-center">
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
