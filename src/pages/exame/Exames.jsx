import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus, FaArrowLeft } from 'react-icons/fa'
import { MdDeleteOutline, MdModeEditOutline} from "react-icons/md";
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import ExamesService from '../../services/clinica/ExamesService'

const Exames = () => {
    const [exame, setExames] = useState([])
    useEffect(() => {
        const exame = ExamesService.getAll()
        setExames(exame)
    }, [])
    function excluir(i) {
        if (window.confirm('Excluir lista?')) {
            ExamesService.delete(i)
            setExames(ExamesService.getAll())
        }
    }

    return (
        <>
            <Box title="Agendamento de Exames">
                <Link to="/exame/create" className="btn btn-dark mb-3"><FaPlus />Novo</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>Qtd</th>
                            <th>Pet</th>
                            <th>Exame</th>
                            <th>Médico</th>
                            <th>Data</th>
                            <th>Horário</th>
                            <th>Situação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exame.map((exame, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/exame/' + i}>
                                    <MdModeEditOutline title="Editar" />
                                    </Link>
                                    <MdDeleteOutline onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{exame.pet}</td>
                                <td>{exame.exame}</td>
                                <td>{exame.medico}</td>
                                <td>{exame.data}</td>
                                <td>{exame.horario}</td>
                                <td>{exame.situacao}</td>
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

export default Exames