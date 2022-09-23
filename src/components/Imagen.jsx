import React  from "react";
import imagen from '../img/rick.jpeg'

const Imagen  = () => {
    return (
        <div className='Imagen de Rick and Morty'>
            <img src={imagen} alt='Imagen de Rick and Morty' width="400px" height="500px"/>
        </div>
    )
}

export default Imagen;