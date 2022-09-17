const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        max: 50,
        unique: true
    },
    precio: {
        type: Number,
        required: true,
        trim: true,
        max: 50
    },
    thumbnail: {
        type: String,
        required: true,
        trim: true,
        max: 100,
        unique: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
        max: 100,
        
    },
    codigo: {
        type: Number,
        required: true,
        trim: true,
        max: 50,
        unique: true
    },
    stock:{
        type: Number,
        required: true,
        trim: true,
        max: 50,
    }
})

module.exports = mongoose.model('productos', ProductsSchema )