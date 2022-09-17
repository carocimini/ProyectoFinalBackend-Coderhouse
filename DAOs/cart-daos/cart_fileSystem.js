const {ContenedorCartArch} = require('.../contenedores/contenedorCart_Arch')

class CarritosDaoArchivo extends ContenedorCartArch {
    constructor() {
        super('/ArchivosDB/baseCarrito.json')
    }
}

module.exports = CarritosDaoArchivo