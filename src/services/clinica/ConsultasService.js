class ConsultasService {

    getAll() {
        const consulta = localStorage.getItem('consulta')
        return consulta ? JSON.parse(consulta) : []
    }

    get(id) {
        const consulta = this.getAll()
        return consulta[id]
    }

    create(dados) {
        const consulta = this.getAll()
        consulta.push(dados)

        localStorage.setItem('consulta', JSON.stringify(consulta))
    }

    update(dados, id) {
        const consulta = this.getAll()
        consulta.splice(id, 1, dados)
        localStorage.setItem('consulta', JSON.stringify(consulta))
    }

    delete(id) {
        const consulta = this.getAll()
        consulta.splice(id, 1)
        localStorage.setItem('consulta', JSON.stringify(consulta))
    }
}

export default new ConsultasService()