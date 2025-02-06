import { livrosModel } from "../models/livros.js";

const criarLivro = async (req, res) => {
    try {
        const {titulo, autor, ano} = req.body
    if(!titulo || !autor || !ano) {
        return res.json({
            erro: true,
            mensagem: 'Todos os dados há de ser preenchidos!'
        })
    }

    const livro = new livrosModel({titulo, autor, ano})
    await livro.save();
    res.json(livro)
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error
        })
    }
}

const buscarLivros = async (req, res) => {
    try {
        const livros = await livrosModel.find()
        res.json({
            erro: false,
            livros
        })
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error
        })
    }
}

const buscarLivroPorId = async (req, res) => {
    const {id} = req.params
    const livro = await livrosModel.findById(id)

    if(!livro){
        return res.json({
            erro: true,
            mensagem: 'Livro não encontrado!'
        })
    }
    res.json(livro)
}

const atualizarLivro = async (req, res) => {
    try {
        const {id} = req.params;
        const livro = await livrosModel.findByIdAndUpdate(id, req.body, {new: true})
        if(!livro){
            return res.json({
                erro: true,
                mensagem: 'Livro não encontrado!'
            })
        }

        res.json({
            erro: false,
            livro
        })
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error
        })
    }
}

const excluirLivro = async (req, res) =>{
    try {
        const {id} = req.params;
        const livro = await livrosModel.findByIdAndDelete(id)
        if(!livro){
            return res.json({
                erro: true,
                mensagem: 'Livro não encontrado!'
            })
        }

        res.json({
            erro: false,
            mensagem: 'Livro excluido com sucesso!'
        })
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error
        })
    }
}

export {criarLivro, buscarLivros, buscarLivroPorId, atualizarLivro, excluirLivro}