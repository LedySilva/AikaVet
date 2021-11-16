import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus, FaArrowLeft } from 'react-icons/fa'
import { MdDeleteOutline, MdModeEditOutline} from "react-icons/md";
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import MedicosService from '../../services/clinica/MedicosService'

const Medicos = () => {
    const [medico, setMedicos] = useState([])
    useEffect(() => {
        const medico = MedicosService.getAll()
        setMedicos(medico)
    }, [])
    function excluir(i) {
        if (window.confirm('Excluir lista?')) {
            MedicosService.delete(i)
            setMedicos(MedicosService.getAll())
        }
    }

    return (
        <>
            <Box title="Cadastro Medicos">
                <Link to="/medico/create" className="btn btn-dark mb-3"><FaPlus />Novo</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>Qtd</th>
                            <th>Nome</th>
                            <th>CRMV</th>
                            <th>Matricula</th>
                            <th>Salário</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Cep</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medico.map((medico, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/medico/' + i}>
                                        <MdModeEditOutline title="Editar"/>
                                    </Link>
                                    <MdDeleteOutline onClick={() => excluir(i)} title="Excluir"/>
                                </td>
                                <td>{i}</td>
                                <td>{medico.nome}</td>
                                <td>{medico.crmv}</td>
                                <td>{medico.matricula}</td>
                                <td>{parseFloat(medico.salario).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                                <td>{medico.email}</td>
                                <td>{medico.telefone}</td>
                                <td>{medico.cep}</td>
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

export default Medicos
