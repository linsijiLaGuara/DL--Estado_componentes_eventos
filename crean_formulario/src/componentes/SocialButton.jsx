import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialButton.css"




 const SocialButton = ({ icons }) => {
  const [facebook, github, linkedin] = icons;

  return (
    <>
      <h1 className="title-text">Crea una cuenta</h1>
      <div className="iconsFGL">

        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-github" />
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />

      </div>
      <p className="subtitle">o usa tu email para registrarte</p>

    </>
  );
};
export default SocialButton;


