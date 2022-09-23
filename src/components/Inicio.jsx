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
          <div  className='lista' key={personaje.id}>
            <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
          </div>
        ))
      ):('No existen personajes')}
    </>
  )
} 

export default Inicio