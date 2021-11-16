import mensagens from "./mensagens"

const ConsultasValidators = {
    nome_pet: {
        required: mensagens.required,
        maxLength: { value: 50, message: mensagens.maxLength + ': 50' },
    },
    
    medico: {
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

export default ConsultasValidators