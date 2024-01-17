import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialButton = () => {
  return (
    <>
      <h1 className="title-text">Crea una cuenta</h1>
      <FontAwesomeIcon icon={faFacebookF} />
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faLinkedin} />
      <p className="title-text">Crea una cuenta</p>
    </>
  );
};

export default SocialButton;
