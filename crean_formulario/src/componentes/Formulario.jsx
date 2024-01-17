import { useState } from "react";
import "./Formulario.css";
import Button from "react-bootstrap/Button";

const Formulario = () => {
  const [nombre, setNombre] = useState("Nombre");
  const [tuemail, setTuemail] = useState("tuemail.ejemplo.com");
  const [Password, setPassword] = useState("Contraseña");
  const [Confirma, setConfirma] = useState("Confirma Contraseña");
  return (
    <>
      <form>
        <div className="form-regist">
          <input name="Nombre" />
          <input name="tuemail.ejemplo.com" />
          <input name="Contraseña" />
          <input name="Confirma Contraseña" />
          <Button variant="success" type="submit">
            Registrarse
          </Button>
        </div>
      </form>
    </>
  );
};
export default Formulario;
