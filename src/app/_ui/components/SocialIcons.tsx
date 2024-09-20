"use client";

import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook, TiSocialYoutube } from "react-icons/ti";

const SocialIcons = () => {
  function handleClick() {
    alert("Thanks for following");
  }
  return (
    <div className="flex items-center">
      <button className="mx-2 btn" onClick={handleClick}>
        <TiSocialYoutube size={40} />
      </button>
      <button className="mx-2 btn" onClick={handleClick}>
        <SlSocialInstagram size={30} />
      </button>
      <button className="mr-2 btn" onClick={handleClick}>
        <TiSocialFacebook size={40} />
      </button>
    </div>
  );
};

export default SocialIcons;
