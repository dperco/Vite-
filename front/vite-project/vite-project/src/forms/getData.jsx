// ListaDatos.jsx

 import React, { useEffect, useState } from 'react';


function ListaUser() {
    const [datos, setDatos] = useState([]);
  
    useEffect(() => {
      const obtenerDatos = async () => {
        try {
          const response = await fetch('http://localhost:8080/api/users');
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
        <h1>Lista de Usuarios:</h1>
        <ul  class="badge text-bg-secondary">
          {datos.map((dato) => (
            <li key={dato.id}>
              <h3>Nombre: {dato.first_name} {dato.last_name}</h3>
              <p>Email: {dato.email}</p>
              <p>Edad: {dato.age}</p>
              <p>Cart: {dato.cart}</p>
              <p>Rol: {dato.role}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
   

export default ListaUser;
