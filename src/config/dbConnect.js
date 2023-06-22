import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://levisse:tomada2020@cluster0.hovc9sy.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection;

export default db