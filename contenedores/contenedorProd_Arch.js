const fs = require("fs")

class ContenedorProdArch {
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
				console.log(`El producto tiene id: ${dataArchivo.length + 1}`)
			}
		} catch (error) {
			console.log("error de escritura", error)
		}
	}

	async updateById(obj) {
		try {
			let dataArch = await this.readFileFunction(this.ruta)
			const objIndex = dataArch.findIndex(prod => prod.id === obj.id)
			if (objIndex !== -1) {
				dataArch[objIndex] = obj
				await fs.promises.writeFile(
					this.ruta,
					JSON.stringify(dataArch, null, 2)
				)
				return { message: "Se actualizo el producto" }
			} else {
				// no existe
				return { error: "No se encontro el producto" }
			}
		} catch (error) {
			console.log("error de lectura", error)
		}
	}

	async getById(id) {
		try {
			const dataArchivo = await this.readFileFunction(this.ruta)
			const producto = dataArchivo.find(producto => producto.id === id)
			if (producto) {
				return producto
			} else {
				return { error: "No se encontro el producto" }
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

	async deleteById(id) {
		try {
			const dataArchivo = await this.readFileFunction(this.ruta)
			let producto = dataArchivo.find(producto => producto.id === id)
			if (producto) {
				const dataArchParseFiltrado = dataArchivo.filter(
					prod => prod.id !== id
				)
				await fs.promises.writeFile(
					this.ruta,
					JSON.stringify(dataArchParseFiltrado, null, 2),
					"utf-8"
				)
				console.log("Se elimino el producto")
			} else {
				console.log("No se encontró el producto")
			}
		} catch (error) {
			console.log("id inexistente", error)
		}
	}
}

module.exports = { ContenedorProdArch }