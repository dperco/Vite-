import mongoose from "mongoose"


const userCollection = 'productos'

const productSchema = new mongoose.Schema({     
        "description": String,
        "images": String,
        "inStock": Number,
        "price": Number,  
        "sizes": [],
        "slug": String,
        "type": String,  
        "tags": [],
        "title": String,
        "gender": String,
        "code":String  
})
// const sequenceSchema = new mongoose.Schema({
//         _id: { type: String, required: true },
//         seq: { type: Number, default: 0 }
//       });
      
//       const Sequence = mongoose.model('Sequence', sequenceSchema);
      
//       // Antes de guardar un nuevo producto, obtén el próximo valor de la secuencia y asígnalo al campo `id`
//       productSchema.pre('save', async function (next) {
//         try {
//           const sequence = await Sequence.findByIdAndUpdate(userCollection, { $inc: { seq: 1 } }, { new: true, upsert: true });
//           this.id = sequence.seq;
//           next();
//         } catch (error) {
//           next(error);
//         }
//       });



mongoose.set('strictQuery', false)


const productModel = mongoose.model(userCollection, productSchema)  

export default productModel 