import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import ConsultasService from '../../services/clinica/ConsultasService'
import MedicosService from '../../services/clinica/MedicosService'
import PetsService from '../../services/clinica/PetsService'
import validators from '../../validators/ConsultasValidators'
import _ from "lodash";

const FormConsultas = (props) => {
    
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {        
        const id = props.match.params.id
        if (id) {
            const consulta = ConsultasService.get(id)
            for (let campo in consulta) {
                setValue(campo, consulta[campo])
            }
        }
    }, [props, setValue])


    function enviarDados(dados) {
        const id = props.match.params.id
        id ? ConsultasService.update(dados, id) : ConsultasService.create(dados)
        props.history.push('/consulta')
    }

    return (
        <>
            <Box title="Consultas">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="pet">
                        <Form.Label column sm={2}> Pet: <span class="obrigatorio">*</span></Form.Label>
                        <Col sm={10}>
                            <Form.Select {...register("nome_pet", validators.nome_pet)}>
                                <option value="">Escolha um dos pets da lista</option>
                                {(_.orderBy(PetsService.getAll(), ["nome_pet"], ["ASC"])).map((pet, i) => (
                                    <option value={pet.nome_pet}>{pet.nome_pet} de {pet.nome}</option>
                                ))}
                            </Form.Select>
                            {errors.nome_pet && <span className="text-danger">{errors.nome_pet.message}</span>}
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3" controlId="medico">
                        <Form.Label column sm={2}> Médico: <span class="obrigatorio">*</span> </Form.Label>
                        <Col sm={10}>
                            <Form.Select {...register("medico", validators.medico)}>
                                <option value="">Escolha um dos médicos da lista</option>
                                {(_.orderBy(MedicosService.getAll(), ["nome"], ["ASC"])).map((medico, i) => (
                                    <option value={medico.nome}>{medico.nome}</option>
                                ))}
                            </Form.Select>
                            {errors.medico && <span className="text-danger">{errors.medico.message}</span>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="data">
                        <Form.Label column sm={2}> Data: <span class="obrigatorio">*</span> </Form.Label>
                        <Col sm={3}>
                            <Form.Control type="date" {...register("data", validators.data)} />
                            {errors.data && <span className="text-danger">{errors.data.message}</span>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="horario">
                        <Form.Label column sm={2}> Horário: <span class="obrigatorio">*</span> </Form.Label>
                        <Col sm={2}>
                            <Form.Control type="time" {...register("horario", validators.horario)} />
                            {errors.horario && <span className="text-danger">{errors.horario.message}</span>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="situcao">
                        <Form.Label column sm={2}> Situação: <span class="obrigatorio">*</span> </Form.Label>
                        <Col sm={2}>
                            <Form.Select {...register("situacao", validators.situacao)}>
                                <option value="agendado">Agendado</option>
                                <option value="feito">Feito</option>
                                <option value="cancelado">Cancelado</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="dark" onClick={handleSubmit(enviarDados)}> <FaCheck /> Salvar </Button>
                        <Link className="btn btn-info ml-3" to="/consulta"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default FormConsultas
