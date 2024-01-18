/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Formulario.css";
import Button from "react-bootstrap/Button";

const Formulario = ({ onAlert }) => {
  const [nombre, setNombre] = useState("");
  const [tuemail, setTuemail] = useState("");
  const [password, setPassword] = useState("");
  const [configPassword, setconfigPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //condicional que valida los campos que n o esten vacios
    if (
      nombre === "" ||
      tuemail === "" ||
      password === "" ||
      configPassword === ""
    ) {
      onAlert("Debe completar todos los campos.");
    } else if (!validateEmail(tuemail)) {
      onAlert("Ingrese un correo electrónico válido.");
    } else if (!validatePassword(password)) {
      onAlert("La contraseña no cumple con los requisitos mínimos.");
    } else if (password !== configPassword) {
      onAlert("Las contraseñas no coinciden.");
    } else {
      onAlert("¡Registro exitoso!");
    }
  };

  const validateEmail = (email) => {
    // Expresión regular para validar el formato del correo electrónico
    const expresionRegularEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegularEmail.test(email);
  };

  const validatePassword = (password) => {
    // Expresión regular para validar el formato password
    const expresionRegularPassword=
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/;
    return expresionRegularPassword.test(password);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-regist">
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
          />
          <input
            type="email"
            value={tuemail}
            onChange={(e) => setTuemail(e.target.value)}
            placeholder="tuemail@ejemplo.com"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
          <input
            type="password"
            value={configPassword}
            onChange={(e) => setconfigPassword(e.target.value)}
            placeholder="Confirma Contraseña"
          />
          <Button variant="success" type="submit">
            Registrarse
          </Button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
