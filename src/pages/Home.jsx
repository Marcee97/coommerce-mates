import "../styles/home.css";
import { Link } from "react-router-dom";

export const Home = ({ classNav, menuClass }) => {
  return (
    <section className="section-home">


      <div className={`menu-desplegable ${menuClass}`}>
        <header className="header-menu-desplegable">
          <ul>
            <li>Redes</li>
          </ul>
        </header>
      </div>


      <div className="contenido-home">
        <div className="productos-home">
          <div className="botonera-home">
            <button className="button-mates">
              <Link to="/mates" className="link-mates" onClick={classNav}>
                Mates
              </Link>
            </button>
            <button className="button-accesorios">
              <Link to="/mates">Accesorios</Link>
            </button>
            <button className="button-yerba">
              <Link to="/mates">Yerba</Link>
            </button>
          </div>
        </div>
       
      </div>
      
    </section>
  );
};
