import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Gestor de Tareas</h1>
      <Link to="/">Inicio</Link>
    </nav>
  );
};

export default Navbar;
