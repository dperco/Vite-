import React ,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListarUser from './forms/getData';
import CrearUsuarios from './forms/cargaDatos';
import LandingPage from './forms/landigPage';
import CreaProductos from './forms/crearProducto';
import ListaProducts from './forms/listarProductos';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  const [count, setCount] = useState(0)
  
  return (
    
  <Router>
      <div>
     
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/list" element={<ListarUser />} />
          <Route path="/crear" element={<CrearUsuarios />} />
          <Route path="/crearProductos" element={<CreaProductos />} />
          <Route path="/listarProductos" element={<ListaProducts />} />
        </Routes>
      </div>
    </Router>


  )
}

export default App
