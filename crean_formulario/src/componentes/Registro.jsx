import React from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import { icon } from "@fortawesome/fontawesome-svg-core";

const Registro = () => {
  return (
    <>
      <SocialButton icon={icon} />
      <Formulario />
    </>
  );
};
export default Registro;
