import express from "express";
import db from './config/dbConnect.js'
import cors from "cors";
import routes from './routes/index.js'

db.on("error", console.log.bind(console, "Erro de conexao"))

db.once("open", () => {
    console.log('conexao com o banco feito com sucesso')
})

const app = express();

app.use(cors())
app.use(express.json())

routes(app);

// app.get('/livros/:id', (req, res) => {
//     let index = buscaLivro(req.params.id)
//     res.json(livros[index])
// })

// app.post('/livros', (req, res) => {
//     livros.push(req.body);
//     res.status(201).send('criando um novo item')
// })

// app.put('/livros/:id', (req, res) => {
//     let index = buscaLivro(req.params.id)
//     livros[index].titulo = req.body.titulo
//     res.json(livros)
// })

// app.delete('/livros/:id', (req, res) => {
//     let {id} = req.params
//     let index = buscaLivro(id)
//     livros.splice(index,1)
//     res.send(`Livro removido com sucesso`)
// })
// function buscaLivro(id) {
//     return livros.findIndex(livros => livros.id == id)
// }

export default app