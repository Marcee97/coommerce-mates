import "../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="section-home">

      <div className="contenido-home">
        <div className="productos-home">
          <div className="botonera-home">
            <button className="button-mates">
              <Link to="/mates" className="link-mates">
                Mates
              </Link>
            </button>
            <button className="button-accesorios">
              <Link to="/accesorios" className="link-mates">Accesorios</Link>
            </button>
            <button className="button-yerba">
              <Link to="/mates" className="link-mates">Yerba</Link>
            </button>
          </div>
        </div>
       
      </div>
      
    </section>
  );
};
