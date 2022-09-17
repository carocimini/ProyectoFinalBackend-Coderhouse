const {ContenedorProdArch} = require('.../contenedores/contenedorProd_Arch')

class ProductosDaoArchivo extends ContenedorProdArch {
    constructor() {
        super('/ArchivosDB/baseProductos.json')
    }
}

module.exports = ProductosDaoArchivo