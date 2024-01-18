import React, { useState } from "react";
import Formulario from "./Formulario";
import SocialButton from"./SocialButton";
import Alerta from "./Alert";
import "./Registro.css";

function Registro() {
  const [alertMessage, setAlertMessage] = useState("");
  const socialIcons = ["Facebook", "Github", "Linkedin"];

  const handleAlert = (message) => {
    setAlertMessage(message);
  };

  return (
    <>
      <div className="formula-style">
        <SocialButton icons={socialIcons} />
        <Alerta message={alertMessage} />
        <Formulario onAlert={handleAlert} />
      </div>
    </>
  );
}

export default Registro;
