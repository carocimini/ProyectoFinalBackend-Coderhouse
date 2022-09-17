const express = require("express")
const {createCart, deleteCartById, getCartDetail, getAllProductsFromCartById, addProductToCartById, deleteProductFromCartById} = require('../controllers/cart_controllers')

const { Router } = express
const routerCarrito = Router()

// RUTAS CARRITO

routerCarrito.post("/", createCart)

routerCarrito.delete("/:idCart", deleteCartById)

routerCarrito.get("/:idCart", getCartDetail)

routerCarrito.get("/:idCart/productos", getAllProductsFromCartById)

routerCarrito.post("/:idCart/productos", addProductToCartById)

routerCarrito.delete("/:idCart/productos/:idProduct", deleteProductFromCartById)

routerCarrito.get("*", async (req, res) => {
	res.json({
		error: -2,
		description: "Ruta no encontrada"
	})
})

module.exports = {routerCarrito}
