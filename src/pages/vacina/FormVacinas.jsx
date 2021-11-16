import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import VacinasService from '../../services/clinica/VacinasService'
import MedicosService from '../../services/clinica/MedicosService'
import PetsService from '../../services/clinica/PetsService'
import validators from '../../validators/VacinasValidators'
import _ from "lodash";


const FormVacinas = (props) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    useEffect(() => {
        const id = props.match.params.id
        if (id) {
            const vacina = VacinasService.get(id)
            for (let campo in vacina) {
                setValue(campo, vacina[campo])
            }
        }
    }, [props, setValue])
    function enviarDados(dados) {
        const id = props.match.params.id
        id ? VacinasService.update(dados, id) : VacinasService.create(dados)
        props.history.push('/vacina')
    }

    return (
      <>
        <Box title="Vacinas">
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="nome_pet">
              <Form.Label column sm={2}>
                Nome do Pet: <span class="obrigatorio">*</span>
              </Form.Label>
              <Col sm={10}>
                <Form.Select {...register("nome_pet", validators.nome_pet)}>
                <option value="">Escolha um dos pets da lista</option>
                    {(_.orderBy(PetsService.getAll(), ["nome_pet"], ["ASC"])).map((pet, i) => (
                        <option value={pet.nome_pet}>{pet.nome_pet} de {pet.nome}</option>
                    ))}
                </Form.Select>
                {errors.nome_pet && (<span className="text-danger">{errors.nome_pet.message}</span>)}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="medico">
              <Form.Label column sm={2}>
                Médico: <span class="obrigatorio">*</span>
              </Form.Label>
              <Col sm={10}>
                  <Form.Select {...register("medico", validators.medico)}>
                  <option value="">Escolha um dos médicos da lista</option>
                      {(_.orderBy(MedicosService.getAll(), ["nome_pet"], ["ASC"])).map((medico, i) => (
                          <option value={medico.nome}>{medico.nome}</option>
                      ))}
                  </Form.Select>
                  {errors.medico && <span className="text-danger">{errors.medico.message}</span>}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="vacina">
              <Form.Label column sm={2}>
                Vacina: <span class="obrigatorio">*</span>
              </Form.Label>
              <Col sm={6}>
                <Form.Select {...register("vacina", validators.vacina)}>
                  <option value="">Escolha uma das vacinas da lista</option>
                  <option value="VANGUARD B ORAL">VANGUARD B ORAL</option>
                  <option value="VANGUARD HTLP 5/CV-L (V8)">
                    VANGUARD HTLP 5/CV-L (V8)
                  </option>
                  <option value="VANGUARD PLUS (V10)">
                    VANGUARD PLUS (V10)
                  </option>
                  <option value="BRONCHIGUARD">BRONCHIGUARD</option>
                  <option value="BRONCHI-SHIELD III">BRONCHI-SHIELD III</option>
                  <option value="DEFENSOR">DEFENSOR</option>
                  <option value="FELOCELL CVR (TRÍPLICE FELINA)">
                    FELOCELL CVR (TRÍPLICE FELINA)
                  </option>
                  <option value="FELOCELL CVR-C (QUÁDRUPLA FELINA)">
                    FELOCELL CVR-C (QUÁDRUPLA FELINA)
                  </option>
                  <option value="FEL-O-VAX LVK IV CALICIVAX (QUÍNTUPLA FELINA)">
                    FEL-O-VAX LVK IV CALICIVAX (QUÍNTUPLA FELINA)
                  </option>
                  <option value="GIARDIAVAX">GIARDIAVAX</option>
                  <option value="GUARD-VAC LCI/GP">GUARD-VAC LCI/GP </option>
                </Form.Select>
                {errors.vacina && (<span className="text-danger">{errors.vacina.message}</span>)}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="data">
              <Form.Label column sm={2}>
                Data: <span class="obrigatorio">*</span>
              </Form.Label>
              <Col sm={3}>
                <Form.Control
                  type="date"
                  {...register("data", validators.data)}
                />
                {errors.data && (
                  <span className="text-danger">{errors.data.message}</span>
                )}
              </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="horario">
              <Form.Label column sm={2}>
                Horário: <span class="obrigatorio">*</span>
              </Form.Label>
              <Col sm={2}>
                <Form.Control
                  type="time"
                  {...register("horario", validators.horario)}
                />
                {errors.horario && (
                  <span className="text-danger">{errors.horario.message}</span>
                )}
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
              <Button variant="dark" onClick={handleSubmit(enviarDados)}>
                <FaCheck /> Salvar
              </Button>
              <Link className="btn btn-info ml-3" to="/vacina">
                <FaArrowLeft /> Voltar
              </Link>
            </div>
          </Form>
        </Box>
      </>
    );
}

export default FormVacinas