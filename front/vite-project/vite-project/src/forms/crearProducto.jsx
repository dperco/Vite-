import React, { useState } from 'react';
import axios from 'axios';


function CreaProductos() {
  const [input, setInput] = useState({
    name: '',
    descripcion: '',
    thumbail: '',
    stcok: '',
    precio: '',
    
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleInputOnChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/products', input);
      console.log(response);
      if (response.status === 200) {
        const contentType = response.headers['content-type'];
        if (contentType && contentType.includes('application/json')) {
          const data = response.data;
          setResponseData(data);
          setAlertMessage('¡Datos enviados con éxito!');
        } else {
          setAlertMessage('La respuesta del servidor no está en formato JSON');
        }
      } else {
        setAlertMessage('Ocurrió un error al enviar los datos');
      }
    } catch (err) {
      console.error('Error al enviar los datos:', err);
      setAlertMessage('Ocurrió un error al enviar los datos');
    }
  };

  return (
    <>
      <div  className="badge text-bg-info">
        {alertMessage && <div>{alertMessage}</div>}
        <h1>Crear un Producto</h1> 
        <form  class="badge text-bg-danger" onSubmit={handleSubmit}>
         <div className='form-group' >      
          <label htmlFor='nombre'>Nombre: </label>
          <input type='text' className='form-control'  id='nombre'   name="name" value={input.name} onChange={handleInputOnChange} />
          </div>
          <br />
          <div className="form-group">
          <label htmlFor='descripcion'>Descripcion: </label>
          <input type='text' className='form-control'  id='descripcion' name="descripcion" value={input.descripcion} onChange={handleInputOnChange} />
          </div>
          <br />
          <div className="form-group">
          <label htmlFor='email'>Imagen: </label>
          <input  type='text' className='form-control'  id='imagen' name="thumbail" value={input.thumbail} onChange={handleInputOnChange} />
          </div>
          <br />
          <div className="form-group">
          <label htmlFor='password'>Stock: </label>
          <input  type='text' className='form-control'  id='stcok' name="stock" value={input.stcok} onChange={handleInputOnChange} />
          </div>
          <br />
          <div className="form-group">
          <label htmlFor='edad'>Precio: </label>
          <input  type='text' className='form-control'  id='Precio' name="precio" value={input.precio} onChange={handleInputOnChange} />
          </div>
          <br />
        
          <br />
          <button type="submit" className="btn btn-primary">Crear Producto</button>
        </form>
        <br />
        <a href='/'><button className="btn btn-primary">Return</button></a>
        {responseData && (
          <div>
            <h2>Respuesta del servidor:</h2>
            <div>{responseData.htmlContent}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default CreaProductos;
