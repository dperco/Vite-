import mongoose from "mongoose"
const userCollection = 'users'
// const userCollection = 'users_test'

const userSchema = new mongoose.Schema({
    first_name: String, 
    last_name:  String, 
    email:      String, 
    password:   String, 
    age:        Number,
    cart:       String, 
    role:       String, 
})

mongoose.set('strictQuery', false)

const userModel = mongoose.model(userCollection, userSchema)

export default userModel