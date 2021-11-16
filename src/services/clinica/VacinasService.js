class VacinasService {

    getAll() {
        const vacina = localStorage.getItem('vacina')
        return vacina ? JSON.parse(vacina) : []
    }

    get(id) {
        const vacina = this.getAll()
        return vacina[id]
    }

    create(dados) {
        const vacina = this.getAll()
        vacina.push(dados)

        localStorage.setItem('vacina', JSON.stringify(vacina))
    }

    update(dados, id) {
        const vacina = this.getAll()
        vacina.splice(id, 1, dados)
        localStorage.setItem('vacina', JSON.stringify(vacina))
    }

    delete(id) {
        const vacina = this.getAll()
        vacina.splice(id, 1)
        localStorage.setItem('vacina', JSON.stringify(vacina))
    }
}

export default new VacinasService()