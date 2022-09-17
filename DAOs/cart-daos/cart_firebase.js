const {ContenedorFire} = require('.../contenedores/contenedor_Fire.js')

class CarritosDaoFire extends ContenedorFire {
    constructor() {
        super('carritos')
    }
}

module.exports = CarritosDaoFire