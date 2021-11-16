import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus, FaArrowLeft } from 'react-icons/fa'
import { MdDeleteOutline, MdModeEditOutline} from "react-icons/md";
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import VacinasService from '../../services/clinica/VacinasService'

const Vacinas = () => {
    const [vacina, setVacinas] = useState([])
    useEffect(() => {
        const vacina = VacinasService.getAll()
        setVacinas(vacina)
    }, [])
    function excluir(i) {
        if (window.confirm('Excluir lista?')) {
            VacinasService.delete(i)
            setVacinas(VacinasService.getAll())
        }
    }

    return (
        <>
            <Box title="Vacinas">
                <Link to="/vacina/create" className="btn btn-dark mb-3"><FaPlus />Novo</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>Qtd</th>
                            <th>Pet</th>
                            <th>Médico</th>
                            <th>Vacina</th>
                            <th>Data</th>
                            <th>Hora</th>
                            <th>Situação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vacina.map((vacina, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/vacina/' + i}>
                                    <MdModeEditOutline title="Editar" />
                                    </Link>
                                    <MdDeleteOutline onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{vacina.nome_pet}</td>
                                <td>{vacina.medico}</td>
                                <td>{vacina.vacina}</td>
                                <td>{vacina.data}</td>
                                <td>{vacina.horario}</td>
                                <td>{vacina.situacao}</td>
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

export default Vacinas