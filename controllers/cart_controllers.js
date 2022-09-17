const { response } = require('express')

//const CarritosDaoArchivo = require('../DAOs/cart-daos/cart_fileSystem.js')
//const cartApp = new CarritosDaoArchivo

//const ProductosDaoArchivo = require('../DAOs/prod-daos/prod_fileSystem.js')
//const productsApp = new ProductosDaoArchivo

const { productosDao: productsApp} = require('../DAOs/indexDaos')
const { carritosDao: cartApp} = require('../DAOs/indexDaos')

const createCart = async (req, res = response) => {
    try {
        const idCarrito = await cartApp.save(req.body)
        res.json({ message: "Se creo un nuevo carrito", idCarrito })
    } catch (error) {
        console.log(error)
    }
}

const deleteCartById = async (req, res = response) => {
    const { idCart } = req.params
    try {
        await cartApp.deleteById(parseInt(idCart))
        res.json({ message: "Carrito eliminado"})
    } catch (error) {
        console.log(error)
    }
}

const getCartDetail = async (req, res = response) => {
    const { idCart } = req.params
    try {
        const carrito = await cartApp.getById(parseInt(idCart))
        res.render("carritos", {
            titulo: `Carrito ${id}`,
            tiempo: carrito.timestamp,
            list: carrito.productos,
            listExist: true,
            carrito: true
        })
    } catch (error) {
        console.log(error)
    }
}

const getAllProductsFromCartById = async (req, res = response) => {
    const { idCart } = req.params
    try {
        const carritoById = await cartApp.getById(parseInt(idCart))
        listaProductos = carritoById.productos
        res.json(listaProductos)
    } catch (error) {
        console.log(error)
    }
}

const addProductToCartById = async (req, res = response) => {
    const { idCart, idProduct } = req.params;
    try {
        const product = await productsApp.getById(parseInt(idProduct));
        try{
            const carritoByID = await cartApp.addProductToCart(parseInt(idCart), product);
            res.json({ message: "Producto guardado", carritoByID })
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteProductFromCartById = async (req, res = response) => {
    const { idCart, idProduct } = req.params
    try {
        await cartApp.deleteProductById(parseInt(idCart), parseInt(idProduct))
        res.json({ message: "Producto eliminado"})
    } catch (error) {
        console.log(error)
    }
}    

module.exports = {
    createCart,
    deleteCartById,
    getCartDetail,
    getAllProductsFromCartById,
    addProductToCartById,
    deleteProductFromCartById
}
