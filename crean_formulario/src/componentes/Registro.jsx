import React from "react";
import Formulario from "./Formulario";
import { SocialButton } from "./SocialButton";
import "./Registro.css"
function Registro() {
  const socialIcons = ['Facebook', 'Github', 'Linkedin'];
  return (
    <>
      <div className="formula-style">
        <SocialButton icons={socialIcons} />
    
      <Formulario />
      </div>
    </>
  );
};
export default Registro;