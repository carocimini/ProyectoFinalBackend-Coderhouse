var admin = require("firebase-admin");
import config from '../config.js'
var serviceAccount = config.firebase.firekey

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()

class ContenedorFire {
	constructor(colleccion) {
		this.colleccion = colleccion,
        this.connexion(),
        this.query = db.collection(colleccion)
	}

	async connexion() {
		console.log('Se conecto a la base de datos ecommerce de Firestore')
	}

	async save(obj) {
		try {
			let datos = await this.query.add(obj)
			return datos.id
		} catch (error) {
			console.log("error de escritura", error)
		} finally {

        }
	}

	async updateById(obj) {
		try {
			await this.query.doc(obj.id).update(obj)
            return obj.id
		} catch (error) {
			console.log("error al actualizar elemento", error)
		}
	}

	async getById(id) {
		try {
			let dato = await this.query.doc(id).get()
			let producto = {...dato.data(), id: datos.id}
			if (producto) {
				return producto
			} else {
				return { error: "No se encontro el elemento" }
			}
		} catch (error) {
			console.log("id inexistente", error)
		}
	}

	async getAll() {
		try {
			let contenido = await this.query.get()
            let datos = contenido.docs
			if (datos.length) {
                let listado = datos.map(doc => ({
                    ...doc.data(), id: doc.id
                }))
				return listado
			} else {
				console.log("No existen elementos")
			}
		} catch (error) {
			console.log("error de lectura", error)
		}
	}

	async deleteById(id) {
		try {
			const datos = await this.query.doc(id).delete()
			return datos
		} catch (error) {
			console.log("error al eliminar el id", error)
		}
	}
}

module.exports = { ContenedorFire }