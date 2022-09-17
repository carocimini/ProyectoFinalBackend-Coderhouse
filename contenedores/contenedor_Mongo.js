const mongoose = require('mongoose')
import config from '../config.js'
import {asPOJO, renameField, removeField} from '../utils/utils.js'

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)


class ContenedorMongo {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async getById(id){
        try{
            const docs = await this.coleccion.find({'_id':id}, {__v:0})
            if (docs.length === 0){
                throw new Error('Error al listar por id: no encontrado')
            } else {
                const result = renameField(asPojo(docs[0]), '_id', 'id')
                return result
            }
        }catch (error){
            throw new Error(`Error al listar por id: ${error}`)
        }
    }

    async getAll(){
        try {
            let docs = await this.coleccion.find({}, {__v:0}).lean()
            docs = docs.map(asPOJO)
            docs = docs.map(d => renameField(d, '_id', 'id'))
            return docs
        } catch (errror){
            throw new Error(`Error al listar todo : ${error}`)
        }
    }

    async save (nuevoElem) {
        try{
            let doc = await this.coleccion.create(nuevoElem)
            doc =asPOJO(doc)
            renameField(doc, '_id', 'id')
            removeField(doc, '__v')
            return doc
        } catch (error){
            throw new Error(`Error al guardar: ${error}`)
        }
    }

}

module.exports = ContenedorMongo