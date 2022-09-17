const {ContenedorFire} = require('.../contenedores/contenedor_Fire.js')

class ProductosDaoFire extends ContenedorFire {
    constructor() {
        super('productos')
    }
}

module.exports = ProductosDaoFire