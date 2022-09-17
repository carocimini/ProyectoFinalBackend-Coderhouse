const express = require("express")
const {getAllProducts, getProductById, addProduct, updateProductById, deleteProductById} = require('../controllers/prod_controllers')

const { Router } = express
const routerProductos = Router()

//  RUTAS PRODUCTOS

routerProductos.get("/", getAllProducts)

routerProductos.get("/:id", getProductById)

routerProductos.post("/", addProduct)

routerProductos.put("/:id", updateProductById)

routerProductos.delete("/:id", deleteProductById)

routerProductos.get("*", async (req, res) => {
	res.json({
		error: -2,
		description: "Ruta no encontada"
	})
})

module.export = {routerProductos}

