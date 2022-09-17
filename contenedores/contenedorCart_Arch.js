const fs = require("fs")

class ContenedorCartArch {
	constructor(ruta) {
		this.ruta = ruta
	}

	async readFileFunction(ruta) {
		let archivo = await fs.promises.readFile(ruta, "utf8")
		let archivoParsed = await JSON.parse(archivo)
		return archivoParsed
	}

	async save(obj) {
		try {
			let dataArchivo = await this.readFileFunction(this.ruta)
			if (dataArchivo.length) {
				await fs.promises.writeFile(
					this.ruta,
					JSON.stringify(
						[...dataArchivo, { ...obj, id: dataArchivo.length + 1 }],
						null,
						2
					)
				)
			} else {
				await fs.promises.writeFile(
					this.ruta,
					JSON.stringify([{ ...obj, id: dataArchParse.length + 1 }], null, 2)
				)
				console.log(`El carrito tiene el id: ${dataArchivo.length + 1}`)
			}
		} catch (error) {
			console.log("error de escritura", error)
		}
	}

	async updateById(id, carrito) {
		carrito.id = id
		try {
			const carritos = await this.getAll()
			const index = carritos.findIndex(obj => obj.id === id)
			if (index !== -1) {
				carritos[index] = carrito
				await fs.promises.writeFile(
					this.ruta,
					JSON.stringify(carritos, null, 2)
				)
				return { mensaje: "Se actualizo el carrito" }
			} else {
				return { mensaje: "No se encontro el carrito" }
			}
		} catch (error) {
			console.log(error)
		}
	}

	async getById(id) {
		try {
			const dataArchivo = await this.readFileFunction(this.ruta)
			const carrito = dataArchivo.find(carrito => carrito.id === id)
			if (carrito) {
				return carrito
			} else {
				return { error: "No se encontro el carrito" }
			}
		} catch (error) {
			console.log("id inexistente", error)
		}
	}

	async getAll() {
		try {
			const dataArchivo = await this.readFileFunction(this.ruta)
			if (dataArchivo.length) {
				return dataArchivo
			} else {
				console.log("No existen productos")
				return dataArchivo
			}
		} catch (error) {
			console.log("error de lectura", error)
		}
	}

	async addProductToCart(idCart, product) {
		try {
			const carritoById = await this.getById(parseInt(idCart))
			let timestamp = Date.now()
			if (carritoById.productos.length) {
				let productToAdd = {
					id: carritoById.products[carritoById.productos.length - 1].id + 1,
					timestamp,
					...product
				}
				carritoById.producto.push(productToAdd)
				await this.updateById(parseInt(idCart), carritoById)
				let idProduct = carritoById.productos[carritoById.productos.length - 1].id
				console.log(`Se agrego el producto con el id: ${idProduct}`)
				return idProduct
			} else {
				let productToAdd = { id: 1, timestamp, ...product }
				carritoById.productos.push(productToAdd)
				await this.updateById(parseInt(idCart), carritoById)
				console.log(`Se agrego el producto con el id: 1`)
				return 1
			}
		} catch (error) {
			console.log(error)
		}
	}

	async deleteById(id) {
		try {
			let dataArchivo = await this.readFileFunction(this.ruta)
			let carrito = dataArchivo.find(carrito => carrito.id === id)
			if (carrito) {
				const dataArchParseFiltrado = dataArchivo.filter(
					carrito => carrito.id !== id
				);
				await fs.promises.writeFile(
					this.ruta,
					JSON.stringify(dataArchParseFiltrado, null, 2),
					"utf-8"
				)
				console.log("Carrito eliminado")
			} else {
				console.log("No se encontró el Carrito")
			}
		} catch (error) {
			console.log("id inexistente", error)
		}
	}

	async deleteProductByID(idCart, idProduct) {
		try {
			let dataArchivo = await this.readFileFunction(this.ruta)
			let carrito = dataArchivo.find(carrito => carrito.id === idCart)
			let producto = carrito.productos.find(
				producto => producto.id === idProduct
			);
			console.log(producto);
			if (carrito) {
				let productosFiltrados = carrito.productos.filter(
					producto => producto.id !== idProduct
				)
				carrito.productos = productosFiltrados
				await this.updateById(idCart, carrito)
				console.log("Se elimino el producto")
			} else {
				console.log("Carrito no encontrado")
			}
		} catch (error) {
			console.log("id inexistente", error)
		}
	}
}

module.exports = { ContenedorCartArch }