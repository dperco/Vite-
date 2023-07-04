import { Router } from 'express'
import productModel from '../models/productos.js';
import path from 'path'

const routerProd = Router()  
//  mostrar lista de productos
routerProd.get('/', async (req,res)=>{
  try{
    const prodAll = await productModel.find()
    res.status(200).json(prodAll);

  }catch(error){
    console.error('Error al obtener los productos:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los productos' });
  }
})


routerProd.post('/', async (req, res) => {
  try {
    const { description, images,inStock, price, sizes, slug, type, tags, title, gender, code } = req.body;
    
    const data = {
      description: description,
      images:images,
      inStock: inStock,
      price: price,
      sizes: sizes,
      slug: slug,
      type: type,
      tags: tags,
      title: title,
      gender: gender,
      code: code
    }
    
    let newProd = new productModel(data)

    let productVerify = !description || !images || !inStock || !price || !sizes || !slug || !type || !tags || !title || !slug || !code

    let prodExistente = await productModel.findOne({ slug: slug });

    console.log(newProd);
    if (productVerify) {
      console.error("ERROR: Todos los campos son obligatorios");
    } else if (prodExistente) {
      console.log('Producto ya existe');
    } else {
      //console.log('Producto no existe');
      await newProd.save();
      const htmlContent = `
      <h3>Producto creado exitosamente:</h3>
      <p>Titulo: ${newProd.title}</p>
      <p>Descripcion: ${newProd.description}</p>   
      <p>Imagen: ${newProd.images}</p>
      <p>Stock: ${newProd.inStock}</p>
      <p>Precio: ${newProd.price}</p>
      <p>Talles: ${newProd.sizes}</p>
      <p>Slug: ${newProd.slug}</p>
      <p>Tipo: ${newProd.type}</p>
      <p>Tags: ${newProd.tags}</p>
      <p>Genero: ${newProd.gender}</p>
    `;
    res.status(200).json({ htmlContent });
      
    }
  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).json({ error: 'Ocurrió un error al crear el producto' });
  }
});

  

export default routerProd;  