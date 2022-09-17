class ContenedorMemo {

    constructor() {
        this.elemntos = []
    }

    getById(id) {
        const elem = this.elementos.find(elem => elem.id === id)
        if(!elem) {
            throw new Error('Error al listar: elemento no encontrado')
        } else {
            return elem
        }
    }

    getAll() {
        return [...this.elementos]
    }

    guardar(elem) {
        let newId
        if(this.elemntos.length === 0) {
            newId = 1
        } else {
            newId = this.elemntos[this.elemntos.length -1].id + 1
        }
        const newElem = {...elem, id:newId}
        this.elementos.push(newElem)
        return newElem
    }
}