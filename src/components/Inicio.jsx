import React,{useEffect,useState} from 'react'
import { allPersonajes } from '../funciones/funciones'
import "../estilos/Inicio.css"

const Inicio = () => {

  const [personajes, setPersonajes] = useState(null)

  useEffect(()=>{
    allPersonajes(setPersonajes)
  },[])

  return (
    
    <>
      {personajes != null ? (
        personajes.map(personaje =>(
          <div  className='container-personaje' key={personaje.id}>
            <a  className='a-inicio' href={`/personaje/${personaje.id}`}>{personaje.name}</a>
          </div>
        ))
      ):(

           <div class="lds-hourglass"></div>

      )}
    </>
  )
} 

export default Inicio