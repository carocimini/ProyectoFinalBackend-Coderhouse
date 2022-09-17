const express = require("express")
const routerCarrito = require('./routes/cart_routes')
const routerProductos = require('./routes/prod_routes')

const app = express()

app.use(express.urlencoded({ express: true }))
app.use(express.json())
app.use(express.static("public"))

const PORT = process.env.PORT || 8080


app.use("/api/productos", routerProductos)
app.use("/api/carrito", routerCarrito)

app.listen(PORT, err => {
	if (err) throw err
	console.log(`Server running on port ${PORT}`)
})