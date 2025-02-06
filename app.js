import express from 'express'
import mongoose from 'mongoose'
import { livrosRouter } from './routes/livrosRoutes.js'

const app = express()
app.use(express.json())

app.use('/livros', livrosRouter)

mongoose.connect('mongodb://localhost:27017/CRUDLivros').then(() =>{
    console.log('Conectado ao MongoDB')
}).catch(err => {
    console.log('Erro ao conectar ao MongoDB: ', err)
})

app.listen(3333, () =>{
    console.log('Servidor rodando na porta 3333')
})