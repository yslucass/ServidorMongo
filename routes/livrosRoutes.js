import express from 'express'
import { atualizarLivro, buscarLivroPorId, buscarLivros, criarLivro, excluirLivro, } from '../controllers/livrosControllers.js'
const livrosRouter = express.Router()

livrosRouter.post('/', criarLivro)
livrosRouter.get('/', buscarLivros)
livrosRouter.get('/:id', buscarLivroPorId)
livrosRouter.put('/:id', atualizarLivro)
livrosRouter.delete('/:id', excluirLivro)

export { livrosRouter }