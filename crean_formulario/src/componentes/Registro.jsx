import React from "react";
import Formulario from "./Formulario";
import { SocialButton } from "./SocialButton";
import "./Registro.css"
import { Alerta } from "./Alert";
function Registro() {
  const socialIcons = ['Facebook', 'Github', 'Linkedin'];
  const aletamos = Alerta
  return (
    <>
      <div className="formula-style">
        <SocialButton icons={socialIcons} />
    
      <Formulario onSubmit={aletamos} />
      </div>
    </>
  );
};
export default Registro;