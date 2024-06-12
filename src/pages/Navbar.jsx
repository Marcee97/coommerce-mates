import { useEffect } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = ({ classNombre, classMenu }) => {
  return (
    <nav className={`nav ${classNombre}`}>
      <img
        src="src/img/matelogo-removebg-preview.png"
        alt="imagen logo"
        className="img-logo"
      />
      <ul className="ul-nav"></ul>

      <span className="material-symbols-outlined btn-menu" onClick={classMenu}>menu</span>
    </nav>
  );
};
