import { useState } from "react";
import '../styles/accesorios.css'
import { Modal } from "../pages/Modal";

export const Accesorios = () => {
  const data = [
    {
      imagen: "https://i.pinimg.com/564x/ca/f8/19/caf8196f7aef5c75ac2f4b3253a7a430.jpg",
      nombre: "Bombilaa",
      disponibilidad: "En Stock",
      precio: 1224,
    },
    {
        imagen: "https://i.pinimg.com/564x/91/8b/61/918b614147de0c367e056d7ec7f9ea15.jpg",
        nombre: "Yerbero",
        disponibilidad: "Agotado",
        precio: 2224,
      },
  ];



const [itemSelected, setItemSelected] = useState(null)
const [openModal, setOpenModal] = useState(false)

const clickOpen = (item)=> {
setItemSelected(item)
setOpenModal(true)
}

const clickClose = ()=> {
    setItemSelected(null)
    setOpenModal(false)
}



  return (
    <section className="section-accesorios">
      <div className="cont-accesorios">
        <div className="cont-buttons-navegacion-accesorios">
        <p className="buttons-navegacion-accesorios">Termos</p>
        <p className="buttons-navegacion-accesorios">Bombillas</p>
        <p className="buttons-navegacion-accesorios">Matera</p>
        </div>
        {data.map((items, index) => (
          <article
            key={index}
            className="contenedor-de-productos"
            onClick={() => clickOpen(items)}
          >
            <img
              src={items.imagen}
              alt="Foto producto"
              className="img-producto"
            />
            <p className="nombre-producto">{items.nombre}</p>
            <p className="disponibilidad-producto">{items.disponibilidad}</p>
            <strong className="precio-producto">${items.precio}</strong>
          </article>
        ))}

       
      </div>

      {openModal && itemSelected && (
        <Modal>
          <article className="contenedor-de-productos-modal">
            <button onClick={clickClose} className="btn-cerrar-modal">
              Cerrar
            </button>
            <img
              src={itemSelected.imagen}
              alt="Foto Producto"
              className="img-producto"
            />
            <p className="texto-producto">{itemSelected.nombre}</p>
            <p className="disponibilidad-producto">
              {itemSelected.disponibilidad}
            </p>
            <div className="btn-comprar-precio">
              <strong className="precio-producto-modal">
                ${itemSelected.precio}
              </strong>
              <button className="button-modal-accesorios">Comprar Ahora</button>
            </div>
          </article>
        </Modal>
      )}
    </section>
  );
};
