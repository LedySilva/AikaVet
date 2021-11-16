import mensagens from "./mensagens"

const ExamesValidators = {
    nome_pet: {
        required: mensagens.required,
    },

    medico: {
        required: mensagens.required,
    },

    exame: {
        required: mensagens.required,
        maxLength: { value: 50, message: mensagens.maxLength + ': 50' },
    },

    data: {
        required: mensagens.required,
    },

    horario: {
        required: mensagens.required,
    },

}

export default ExamesValidators