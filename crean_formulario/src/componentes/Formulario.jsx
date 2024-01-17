import { useState } from "react";
import "./Formulario.css";
import Button from "react-bootstrap/Button";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [tuemail, setTuemail] = useState("");
  const [password, setPassword] = useState("");
  const [configPassword, setconfigPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
            placeholder="tuemail.ejemplo.com"
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
