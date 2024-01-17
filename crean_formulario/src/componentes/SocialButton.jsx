// SocialButton.js
import React from "react";
import { CiFacebook } from "react-icons/ci";

import { IoLogoGithub } from "react-icons/io5";

const SocialButton = () => {
  return (
    <>
      <h1 className="title-text">Crea una cuenta</h1>
      <CiFacebook />
      <IoLogoGithub />
    </>
  );
};

export default SocialButton;
