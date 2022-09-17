const {ContenedorMongo} = require('.../contenedores/contenedor_Mongo.js')

class CarritosDaoMongo extends ContenedorMongo {
    constructor() {
        super('carritos', {
            titulo:{
                type: String,
                required: true,
                trim: true,
                max: 50,
                unique: true
            },
            tiempo:{
                type: Date,
                required: true,
                trim: true,
                max: 50,
                unique: true
            },
            [productos]:{
                type: String,
                required: true
            }
        })
    }
}

module.exports = CarritosDaoMongo