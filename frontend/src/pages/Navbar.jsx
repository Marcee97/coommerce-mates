import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [classDesplegado, setClassDesplegado] = useState("menu-desplegado");

  const desplegar = () => {
    setClassDesplegado(
      classDesplegado === "menu-desplegado" ? "desplegado" : "menu-desplegado"
    );
  };

  return (
    <>
      <nav className="nav">
        <Link to={"/"} className="contenedor-img">
          <img
            src="/img/matelogo-removebg-preview.webp"
            alt="imagen logo"
            className="img-logo"
          />
        </Link>
        <ul className="ul-nav"></ul>

        <span
          className="material-symbols-outlined btn-menu"
          onClick={desplegar}
        >
          menu
        </span>
        <div className="contenedor-menu">
          <div className={`menu-desplegable ${classDesplegado}`}>
            <header className="header-menu-desplegable">
              <ul>
                <li>
                  Redes
                  <span className="material-symbols-outlined flecha-li">
                    chevron_right
                  </span>
                </li>
                <li>
                  Ubicacion{" "}
                  <span className="material-symbols-outlined flecha-li">
                    chevron_right
                  </span>
                </li>
                <li>
                  Carrito{" "}
                  <span className="material-symbols-outlined flecha-li">
                    chevron_right
                  </span>
                </li>
              </ul>
            </header>
          </div>
        </div>
      </nav>
    </>
  );
};
