import React from "react";
import Formulario from "./Formulario";
import {SocialButton} from "./SocialButton";

function Registro() {
  const socialIcons = ['Facebook', 'Github', 'Linkedin'];
  return (
    <>
      <SocialButton icons={socialIcons} />
      <Formulario />
    </>
  );
};
export default Registro;