import mensagens from "./mensagens"

const PetsValidators = {
    nome: {
        required: mensagens.required,
        maxLength: { value: 40, message: mensagens.maxLength + ': 40' },
    },

    nome_pet: {
        required: mensagens.required,
        maxLength: { value: 40, message: mensagens.maxLength + ': 40' },
    },

    cpf: {
        required: mensagens.required,
        maxLength: { value: 14, message: mensagens.maxLength + ': 14' },
    },

    pet: {
        maxLength: { value: 10, message: mensagens.maxLength + ': 10' },
    },

    email: {
        maxLength: { value: 50, message: mensagens.maxLength + ': 50' },
    },

    telefone: {
        maxLength: { value: 15, message: mensagens.maxLength + ': 15' },
    },

    cep: {
        maxLength: { value: 9, message: mensagens.maxLength + ': 9' },
    },

    logradouro: {
        maxLength: { value: 50, message: mensagens.maxLength + ': 50' },
    },

    complemento: {
        maxLength: { value: 50, message: mensagens.maxLength + ': 50' },
    },

    numero: {
        maxLength: { value: 4, message: mensagens.maxLength + ': 4' },
    },

    bairro: {
        maxLength: { value: 50, message: mensagens.maxLength + ': 50' },
    },

}

export default PetsValidators