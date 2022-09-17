const {ContenedorMongo} = require('.../contenedores/contenedor_Mongo.js')

class ProductosDaoMongo extends ContenedorMongo {
    constructor() {
        super('productos',{
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
    }
}

module.exports = ProductosDaoMongo