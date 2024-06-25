import "../styles/mates.css";
import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import axios from "axios";



export const Mates = () => {
  

  const baseURL = import.meta.env.VITE_BACKEND || 'http://localhost:3000'

  const client = axios.create({
      baseURL: baseURL
  })


  const scroll = ()=> {
    document.querySelector('.section-mates-camioneros').scrollIntoView({behavior: 'smooth'})
  }

const [itemSelected, setItemSelected] = useState(null)
const [modalOpen, setModalOpen] = useState(false)


const clickOpen = (items)=> {
setItemSelected(items)
setModalOpen(true)
}
const clickClose = ()=> {
  setItemSelected(null)
  setModalOpen(false)
}



const [matesDb, setMatesDb] = useState(null)
const [loading, setLoading] = useState(true)



useEffect(()=> {

  client.get("/mates")
  .then(response => {
    console.log(response.data)
    setMatesDb(response.data)
    setLoading(false)

  })
  .catch(error => {
    console.log(error)
    setLoading(false)
  })
console.log('messi')

}, [])

if(loading) return <p>Loading</p>
  return (
    <section className="section-mates">
      <div className="cont-mates">
        <div className="modelos-mates">
          <p className="buttons-navegacion-modelos">Imperial</p>
          <p className="buttons-navegacion-modelos" onClick={scroll}>Camionero</p>
          <p className="buttons-navegacion-modelos">Madera</p>
        </div>


{
  matesDb.map((items, index) => (
    <article key={index} className="contenedor-de-productos" onClick={()=> clickOpen(items)}>
            <img
              src={items.imagen}
              alt="Foto producto"
              className="img-producto"
            />
            <p className="nombre-producto">{items.nombre}</p>
            {
              items.stock > 0 ? <p style={{color: "#00ff0d"}}>Disponibles</p> : <p style={{color: "#f00"}}>Agotado</p>
            }
            <strong className="precio-producto">${items.precio}</strong>
          </article>
  ))
}

      </div>

      {modalOpen && itemSelected && (
        <Modal>
          <article className="contenedor-de-productos-modal">
<button onClick={clickClose} className="btn-cerrar-modal">Cerrar</button>
<img src={itemSelected.imagen} alt="Foto Producto" className="img-producto" />
<p className="texto-producto">{itemSelected.nombre}</p>
<p className="disponibilidad-producto">{itemSelected.disponibilidad}</p>
<div className="btn-comprar-precio">

<strong className="precio-producto-modal">${itemSelected.precio}</strong>
<button className="button-modal-mates">Comprar Ahora</button>
</div>
</article>
        </Modal>
      )}
    </section>
  );
};
