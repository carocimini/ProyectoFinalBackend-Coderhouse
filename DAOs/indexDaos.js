let productosDao
let carritosDao

switch (process.env.PERSISTENCY) {
    case 'json':
        const {default: ProductosDaoArchivo} = await import('./prod-daos/prod_fileSystem.js')
        productosDao = new ProductosDaoArchivo('../ArchivosDB/baseProductos.json')

        const {default: CarritosDaoArchivo} = await import('./cart-daos/cart_fileSystem.js')
        carritosDao = new CarritosDaoArchivo('../ArchivosDB/baseCarrito.json')

        break;
    case 'firebase':
        const {default: ProductosDaoFire} = await import('./prod-daos/prod_firebase.js')
        productosDao = new ProductosDaoFire()

        const {default: CarritosDaoFire} = await import('./cart-daos/cart_firebase.js')
        carritosDao = new CarritosDaoFire()

        break;
        case 'mongodb':
            const {default: ProductosDaoMongo} = await import('./prod-daos/prod_mongoDB.js')
            productosDao = new ProductosDaoMongo()
    
            const {default: CarritosDaoMongo} = await import('./cart-daos/cart_mongoDB.js')
            carritosDao = new CarritosDaoMongo()
    
        break;
        case 'memoria':
            const {default: ProductosDaoMemo} = await import('./prod-daos/prod_memoria.js')
            productosDao = new ProductosDaoMemo()
    
            const {default: CarritosDaoMemo} = await import('./cart-daos/cart_memoria.js')
            carritosDao = new CarritosDaoMemo()
    
        break;

    default:
        break;    
}

module.export = productosDao