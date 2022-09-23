import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { unicoPersonaje } from "../funciones/funciones";
import "../estilos/Personaje.css"

const Personaje = () => {
  const [personaje, setPersonajes] = useState(null);
  const params = useParams();

  useEffect(() => {
    unicoPersonaje(params.id, setPersonajes);
  }, []);

  return (
    <>
      {personaje != null?(
      <div className="container">
        <span>
          Personaje con el id {params.id} con el nombre {personaje.name}
        </span>
         <img src={personaje.image} alt="" />
      </div>
      ):( <span>Cargando informacion .... espere</span> )}
    </>
  );
};

export default Personaje;
