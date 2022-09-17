const { response } = require('express')

//const ProductosDaoArchivo = require('../DAOs/prod-daos/prod_fileSystem.js')
//const productsApp = new ProductosDaoArchivo

const { productosDao: productsApp} = require('../DAOs/indexDaos')

const admin = true

const getAllProducts = async (req, res = response) => {
    try {
        const productos = await productsApp.getAll()
        // res.json({ productos })
        res.render("productos", {
            titulo: "Listado de Productos",
            lista: productos,
            exist: true,
            producto: true
        })
    } catch (error) {
        console.log(error)
    }
}

const getProductById = async (req, res = response) => {
    let { id } = req.params
    try {
        const producto = await productsApp.getById(parseInt(id))
        res.json({ producto })
    } catch (error) {
        console.log(error)
    }
}

const addProduct = async (req, res = response) => {
        try {
            if (admin) {
                const objProducto = req.body;
                productsApp.save(objProducto)
                res.json({ message: "Se guardo el producto", objProducto })
            } else {
                res.json({
                    error: -1,
                    message: "Acceso no autorizado"
                })
            }
        } catch (error) {
            console.log(error)
        }
}

const updateProductById = async (req, res = response) => {
    try {
        if (admin) {
            const { id } = req.params
            const objProducto = req.body
            productsApp.updateById({ id: parseInt(id), ...objProducto })
            res.json({ message: "Se actualizo el producto" })
        } else {
            res.json({
                error: -1,
                message: "Acceso no autorizado"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteProductById = async (req, res = response) => {
    try {
        if (admin) {
            const { id } = req.params
            productsApp.deleteById(parseInt(id))
            res.json({ message: "Producto eliminado" })
        } else {
            res.json({
                error: -1,
                message: "Acceso no autorizado"
            })
        }
    } catch (error) {
        console.log(error)
    }
}    

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProductById,
    deleteProductById
}