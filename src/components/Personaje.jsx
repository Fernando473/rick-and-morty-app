import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { unicoPersonaje } from "../funciones/funciones";
import "../estilos/Personaje.css";

const Personaje = () => {
  const [personaje, setPersonajes] = useState(null);
  const params = useParams();

  useEffect(() => {
    unicoPersonaje(params.id, setPersonajes);
  }, []);

  return (
    <>
      {personaje != null ? (
        <div className="container">
          <h1>{personaje.name}</h1>
          <h2>{personaje.gender}</h2>
          <h2>{personaje.species}</h2>
          <h2>{personaje.status}</h2>
          <img src={personaje.image} alt="" />
        </div>
      ) : (
        <div class="lds-hourglass"></div>
      )}
    </>
  );
};

export default Personaje;
