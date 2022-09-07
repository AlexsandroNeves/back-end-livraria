import mongoose from 'mongoose'

const autoSchema = new mongoose.Schema(
    {
        id: { type: String },
        nome: { type: String, required: true },
        nacionalidade: { type: String }
    },
    {
        versionKey: false
    }
)
const autores = mongoose.model("autores", autoSchema)
export default autores