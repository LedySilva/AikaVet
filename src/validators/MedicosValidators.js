import mensagens from "./mensagens"

const MedicosValidators = {
    nome: {
        required: mensagens.required,
        maxLength: { value: 50, message: mensagens.maxLength + ': 50' },
    },

    crmv: {
        required: mensagens.required,
        maxLength: { value: 10, message: mensagens.maxLength + ': 10' },
    },

    matricula: {
        required: mensagens.required,
        maxLength: { value: 10, message: mensagens.maxLength + ': 10' },
    },

    email: {
        required: mensagens.required,
        maxLength: { value: 50, message: mensagens.maxLength + ': 50' },
    },

    telefone: {
        required: mensagens.required,
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

export default MedicosValidators