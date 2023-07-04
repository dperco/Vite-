import React, { useState } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function CreaDatos() {
  const [input, setInput] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    age: '',
    cart: '',
    role: ''
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleInputOnChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users', input);
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
        <h1>Registrar un nuevo usuario</h1> 
        <form  class="badge text-bg-danger" onSubmit={handleSubmit}>
         <div className='form-group' >      
          <label htmlFor='nombre'>Nombre: </label>
          <input type='text' className='form-control'  id='nombre'   name="first_name" value={input.first_name} onChange={handleInputOnChange} />
          </div>
          <br />
          <div className="form-group">
          <label htmlFor='apellido'>Apellido: </label>
          <input type='text' className='form-control'  id='apellido' name="last_name" value={input.last_name} onChange={handleInputOnChange} />
          </div>
          <br />
          <div className="form-group">
          <label htmlFor='email'>Email: </label>
          <input  type='text' className='form-control'  id='email' name="email" value={input.email} onChange={handleInputOnChange} />
          </div>
          <br />
          <div className="form-group">
          <label htmlFor='password'>Password: </label>
          <input  type='text' className='form-control'  id='password' name="password" value={input.password} onChange={handleInputOnChange} />
          </div>
          <br />
          <div className="form-group">
          <label htmlFor='edad'>Edad: </label>
          <input  type='text' className='form-control'  id='edad' name="age" value={input.age} onChange={handleInputOnChange} />
          </div>
          <br />
          <div className="form-group">
          <label htmlFor='cart'>Cart: </label>
          <input   type='text' className='form-control'  id='cart' name="cart" value={input.cart} onChange={handleInputOnChange} />
          </div>
          <br />
          <div className="form-group">
          <label htmlFor='role'>Role: </label>
          <input   type='text' className='form-control'  id='role' name="role" value={input.role} onChange={handleInputOnChange} />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Crear usuario</button>
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

export default CreaDatos;
