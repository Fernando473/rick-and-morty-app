import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from "./components/Inicio"
import Imagen from './components/Imagen'
import Personaje from "./components/Personaje"
import "./App.css"



function App() {
  return (
    <div className="App">
      <Imagen></Imagen>
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Inicio></Inicio>}></Route>
            <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
