import { Router } from 'express'
import UserModel from "../models/users.js";
////import saveUser from '../controllers/user.Controllers.js'
const router = Router()

// user.router.js

// router.get('/', async (req, res) => {
//     try {
//       // Obtener todos los usuarios de la base de datos
//       const users = await UserModel.find();
  
//       // Generar el contenido HTML con los datos de los usuarios
//       const htmlContent = `
//         <h1>Usuarios:</h1>
//         ${users.map(user => `
//           <div>
//             <h3>Nombre: ${user.first_name} ${user.last_name}</h3>
//             <p>Email: ${user.email}</p>
//             <p>Edad: ${user.age}</p>
//             <p>Cart: ${user.cart}</p>
//             <p>Rol: ${user.role}</p>
//           </div>
//         `).join('')}
//       `;
  
//       // Enviar la respuesta con el contenido HTML
//       res.status(200).send(htmlContent);
//     } catch (error) {
//       console.error('Error al obtener los usuarios:', error);
//       res.status(500).json({ error: 'Ocurrió un error al obtener los usuarios' });
//     }
//   });
  
router.get('/', async (req, res) => {
    try {
      // Obtener todos los usuarios de la base de datos
      const users = await UserModel.find();
  
      // Enviar la respuesta como JSON con los datos de los usuarios
      res.status(200).json(users);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
      res.status(500).json({ error: 'Ocurrió un error al obtener los usuarios' });
    }
  });
  
router.post('/', async (req,res)=>{
    //console.log('hola')
  try{
    const data = req.body

    const newUser= new UserModel(data) 

    await newUser.save()

    const htmlContent = `
      <h3>Usuario creado exitosamente:</h3>
      <p>Nombre: ${newUser.first_name} ${newUser.last_name}</p>
      <p>Email: ${newUser.email}</p>
      <p>Edad: ${newUser.age}</p>
      <p>Cart: ${newUser.cart}</p>
      <p>Rol: ${newUser.role}</p>
    `;
    res.status(200).json({ htmlContent });
  }catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ error: 'Ocurrió un error al crear el usuario' });
      }


    })

export default router