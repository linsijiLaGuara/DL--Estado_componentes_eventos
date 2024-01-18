import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





export const SocialButton = ({ icons }) => {
  const [facebook, github, linkedin] = icons;

  return (
    <>
      <h1 className="title-text">Crea una cuenta</h1>
      <FontAwesomeIcon icon={facebook} />
      <FontAwesomeIcon icon={github} />
      <FontAwesomeIcon icon={linkedin} />
      
    </>
  );
};


