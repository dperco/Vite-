import React, { useEffect, useState } from 'react';


function ListaProducts() {
    const [datos, setDatos] = useState([]); 
    useEffect(() => {
      const obtenerDatos = async () => {
        try {
          const response = await fetch('http://localhost:8080/api/productos');
          const data = await response.json();
          setDatos(data);
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      };
  
      obtenerDatos();
    }, []);
    return (
      <div className="badge text-bg-info">
        <a href='/'><button>Return</button></a>
        <h1>Lista de Products:</h1>
        <ul  className="container">
          {datos.map((dato) => (
            <div  className='image-container'>
            <li key={dato._id}>   
              <img src={`http://localhost:5173/src/assets/${dato.images}`}   alt="Imagen " /> 
              <p>Nombre: {dato.title} </p>
              <p>Descripcion: {dato.descripcion}</p>
              <p>Stock: {dato.inStock}</p>
              <p>Precio: {dato.price}</p>
              <button>Comprar</button>
              <br></br>
            </li>
            </div>
            
          ))}  
        </ul>
      </div>
    );
  }
   

export default ListaProducts;
