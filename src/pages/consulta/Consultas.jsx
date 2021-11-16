import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus, FaArrowLeft } from 'react-icons/fa'
import { MdDeleteOutline, MdModeEditOutline} from "react-icons/md";
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import ConsultasService from '../../services/clinica/ConsultasService'

const Consultas = () => {
    const [consulta, setConsultas] = useState([])
    useEffect(() => {
        const consulta = ConsultasService.getAll()
        setConsultas(consulta)
    }, [])
    function excluir(i) {
        if (window.confirm('Excluir lista?')) {
            ConsultasService.delete(i)
            setConsultas(ConsultasService.getAll())
        }
    }

    return (
        <>
            <Box title="Consultas">
                <Link to="/consulta/create" className="btn btn-dark mb-3"><FaPlus />Novo</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>Qtd</th>
                            <th>Pet</th>
                            <th>Médico</th>
                            <th>Data</th>
                            <th>Horário</th>
                            <th>Situação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {consulta.map((consulta, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/consulta/' + i}>
                                        <MdModeEditOutline title="Editar" />
                                    </Link>
                                    <MdDeleteOutline onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{consulta.nome_pet}</td>
                                <td>{consulta.medico}</td>
                                <td>{consulta.data}</td>
                                <td>{consulta.horario}</td>
                                <td>{consulta.situacao}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className="text-center">
              <Link className="btn btn-info ml-3" to="/">
                <FaArrowLeft /> Voltar
              </Link>
            </div>
            </Box>
        </>
    )
}

export default Consultas
