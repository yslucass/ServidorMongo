import {Schema, model} from "mongoose";

const livrosSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    }
})

const livrosModel = model('Livros', livrosSchema)

export{livrosModel}