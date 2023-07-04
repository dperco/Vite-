// import express from 'express'
// import userRouter from './src/routes/user.router.js'
// import productRouter from './src/routes/product.router.js'
// import mongoose from 'mongoose'
// import autoIncrement from 'mongoose-auto-increment';

// import { Command } from 'commander'
// //import MongoStore from 'connect-mongo'
// import cors from 'cors'
// import dotenv from 'dotenv'
// const program = new Command()
// program
//     .option('-p <port>', 'Port to connect', 8080)
//     .option('--mode <mode>', 'description', 'development')
// program.parse()

// dotenv.config({
//     path: (program.opts().mode === 'development') ? './.env.development' : './.env.production'
// })
// const app = express()
// const PORT = process.env.PORT || 8080
// const MONGO=process.env.MONGO_URI
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cors())
// app.use('/api/users', userRouter)
// app.use('/api/productos', productRouter)

// // MONGODB CONNECTION
//     mongoose.set('strictQuery', false)
//       try {
//         await mongoose.connect('mongodb+srv://dperco:abc12345678@cluster0.zdpd0ie.mongodb.net/ecommerce') //mongoUri) // si no conecta: verificar rango de IP autorizada en Atlas
//         autoIncrement.initialize(mongoose.connection);
//         console.log('conectado a BD'); //'[mongodb] Base de Datos conectada.');
        
//         app.listen( PORT, () => console.log(`[express] HTTP listening on port ${PORT}...`) )  
//         } catch (error) {
//              console.log('[mongodb] Error de conexión a la Base de Datos!!!!!!!!!');
//         }


import express from 'express';
import userRouter from './src/routes/user.router.js';
import productRouter from './src/routes/product.router.js';
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import bluebird from 'bluebird';
import path from 'path'
import { Command } from 'commander';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
//app.use(express.static(path.join(__dirname, 'images')));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const program = new Command();
program
  .option('-p <port>', 'Port to connect', 8080)
  .option('--mode <mode>', 'description', 'development')
program.parse();

dotenv.config({
  path: (program.opts().mode === 'development') ? './.env.development' : './.env.production'
});

const app = express();
const PORT = process.env.PORT || 8080;
const MONGO = process.env.MONGO_URI;
//app.use('/api/src/images', express.static(__dirname + '/images'));
//app.use(express.static('images'));
app.use(express.static(path.join(__dirname, 'images')));

//app.use('/api/src/images', express.static('images'));
app.get('/api/images/:imageName', (req, res) => {
  const { imageName } = req.params;
  res.sendFile(path.join(__dirname, 'images', imageName));
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/users', userRouter);
app.use('/api/productos', productRouter);

// Configurar bluebird como biblioteca de promesas
mongoose.Promise = bluebird;

// MONGODB CONNECTION
mongoose.set('strictQuery', false);
try {
await mongoose.connect('mongodb+srv://dperco:8LUrpNtsK3TtQgPW@cluster0.zdpd0ie.mongodb.net/ecommerce',{ 
        useNewUrlParser: true,
        useUnifiedTopology: true
      });     
  
  console.log('Connected to the database');
  app.listen(PORT, () => console.log(`HTTP listening on port ${PORT}...`));
} catch (error) {
  console.log('Database connection error:', error);
}


    