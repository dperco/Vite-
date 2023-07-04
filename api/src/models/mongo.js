// import mongoose from 'mongoose'
// import config from '../config/config.js'
// import User from './users.js'
// // import Product from './productModel.js'

// export default class Mongo {
//     constructor() {
//         this.mongoose = mongoose.connect(config.mongo.url).catch(err => {
//             console.log(err.message)
//             process.exit()
//         })
//         const timestamp = { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
//         const userSchema = mongoose.Schema(User.schema, timestamp)
//         // const productSchema = mongoose.Schema(Product.schema, timestamp)
//         this.models = {
//             [User.model]: mongoose.model(User.model, userSchema)
//             // [Product.model]: mongoose.model(Product.model, productSchema)
//         }
//     }

//     get = async(options, entity) => {
//         if (!this.models[entity]) throw new Error('Entity not found in models')
//         let results = await this.models[entity].find(options)
//         return results.map(result => result.toObject())
//     }

//     insert = async(document, entity) => {
//         if (!this.models[entity]) throw new Error('Entity not found in models')
//         try {
//             let instance = new this.models[entity](document)
//             let result = await instance.save()
//             return result?result.toObject():null
//         } catch(err) {
//             console.log(err.message)
//             return null
//         }
//     }
// }