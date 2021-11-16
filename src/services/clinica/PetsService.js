class PetsService {

    getAll() {
        const pet = localStorage.getItem('pet')
        return pet ? JSON.parse(pet) : []
    }

    get(id) {
        const pet = this.getAll()
        return pet[id]
    }

    create(dados) {
        const pet = this.getAll()
        pet.push(dados)

        localStorage.setItem('pet', JSON.stringify(pet))
    }

    update(dados, id) {
        const pet = this.getAll()
        pet.splice(id, 1, dados)
        localStorage.setItem('pet', JSON.stringify(pet))
    }

    delete(id) {
        const pet = this.getAll()
        pet.splice(id, 1)
        localStorage.setItem('pet', JSON.stringify(pet))
    }
}

export default new PetsService()