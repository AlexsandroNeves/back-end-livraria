import express from 'express'
import AutorController from '../controllers/autoresController.js'

const router = express.Router();

router
    .get("/autores", AutorController.listarautor)
    .get("/autores/:id", AutorController.listarautorPorId)
    .post("/autores", AutorController.cadastrarautor)
    .put("/autores/:id", AutorController.atualizarautor)
    .delete("/autores/:id", AutorController.excluirautor)

export default router;