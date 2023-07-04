import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

import './landingPage.css';
import { bottom } from '@popperjs/core';
function LandingPage (){

    return (     
         
         
         <div  className="container-fluid vh-100 bg-image"   >
        
               <div  className='title'>
                <h3 className='mt-0'>Bienvenido al Ecommerce MARKET -PERCO-WEB</h3>
              </div>
              <nav>
                
                 <ul>
                   <div  className='listar'>
                    <h5>
                   <li >
                      <Link to="/list" className="btn btn-primary">ListaUsuarios</Link>
                  </li>
                  </h5>
                  </div>
                  
                  
                  <div  className='crear'>
                  <h5>
                  <li >
                      <Link to="/crear" className="btn btn-primary">CrearUsuarios</Link>
                  </li>
                  </h5>
                  </div>
                  <div  className='listarproductos'>
                    <h5>
                   <li >
                      <Link to="/listarProductos" className="btn btn-primary">ListarProductos</Link>
                  </li>
                  </h5>
                  </div>
                  
                  
                  <div  className='crearProductos'>
                  <h5>
                  <li >
                      <Link to="/crearProductos" className="btn btn-primary">CrearProductos</Link>
                  </li>
                  </h5>
                  </div>
                 </ul>
            </nav>
        </div>
     
 );
}

 export default LandingPage ;
