class ExamesService {

    getAll() {
        const exame = localStorage.getItem('exame')
        return exame ? JSON.parse(exame) : []
    }

    get(id) {
        const exame = this.getAll()
        return exame[id]
    }

    create(dados) {
        const exame = this.getAll()
        exame.push(dados)

        localStorage.setItem('exame', JSON.stringify(exame))
    }

    update(dados, id) {
        const exame = this.getAll()
        exame.splice(id, 1, dados)
        localStorage.setItem('exame', JSON.stringify(exame))
    }

    delete(id) {
        const exame = this.getAll()
        exame.splice(id, 1)
        localStorage.setItem('exame', JSON.stringify(exame))
    }
}

export default new ExamesService()