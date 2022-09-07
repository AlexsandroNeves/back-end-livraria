import autor from "../models/Autor.js";

class AutorController {

    static listarautor = (req, res) => {
        autor.find((err, autor) => {
            res.status(200).json(autor)
        })

    }

    static listarautorPorId = (req, res) => {
        const id = req.params.id;

        autor.findById(id, (err, autor) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Id do autor não localizado` })

            }
            else {
                res.status(200).send(autor);
            }
        })
    }

    static cadastrarautor = (req, res) => {
        let autor = new autor(req.body)

        autor.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar um autor` })
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarautor = (req, res) => {
        const id = req.params.id;

        autor.findByIdAndUpdate(id, { $set: req.body }, (err) => {

            if (!err) {
                res.status(200).send({ message: 'autor atualizado com sucesso' })
            }
            else {
                res.status(500).send({ message: err.message })
            }
        })

    }

    static excluirautor = (req, res) => {
        const id = req.params.id;
        autor.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'autor removido com sucesso' })
            }

            else {
                res.status(500).send({ message: err.message })
            }
        })
    }
}

export default AutorController;