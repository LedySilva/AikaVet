class MedicosService {

    getAll() {
        const medico = localStorage.getItem('medico')
        return medico ? JSON.parse(medico) : []
    }

    get(id) {
        const medico = this.getAll()
        return medico[id]
    }

    create(dados) {
        const medico = this.getAll()
        medico.push(dados)

        localStorage.setItem('medico', JSON.stringify(medico))
    }

    update(dados, id) {
        const medico = this.getAll()
        medico.splice(id, 1, dados)
        localStorage.setItem('medico', JSON.stringify(medico))
    }

    delete(id) {
        const medico = this.getAll()
        medico.splice(id, 1)
        localStorage.setItem('medico', JSON.stringify(medico))
    }
}

export default new MedicosService()