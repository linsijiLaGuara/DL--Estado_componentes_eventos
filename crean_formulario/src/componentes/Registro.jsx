import React from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

const Registro = () => {
  const socialIcons = ["facebook", "github", "linkedin"];
  return (
    <>
      <SocialButton icons={socialIcons} />
      <Formulario />
    </>
  );
};
export default Registro;
