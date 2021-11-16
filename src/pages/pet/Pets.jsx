import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus, FaArrowLeft } from 'react-icons/fa'
import { MdDeleteOutline, MdModeEditOutline} from "react-icons/md";
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import PetsService from '../../services/clinica/PetsService'

const Pets = () => {

    const [pet, setPets] = useState([])
    useEffect(() => {
        const pet = PetsService.getAll()
        setPets(pet)
    }, [])
    function excluir(i) {
        if (window.confirm('Excluir lista?')) {
            PetsService.delete(i)
            setPets(PetsService.getAll())
        }
    }

    return (
        <>
            <Box title="Cadastro Pets">
                <Link to="/pet/create" className="btn btn-dark mb-3"><FaPlus />Novo</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>Qtd</th>
                            <th>Nome</th>
                            <th>CPF Tutor</th>
                            <th>Nome Pet</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Cep</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pet.map((pet, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/pet/' + i}>
                                    <MdModeEditOutline title="Editar" />
                                    </Link>
                                    <MdDeleteOutline onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{pet.nome}</td>
                                <td>{pet.cpf}</td>
                                <td>{pet.nome_pet}</td>
                                <td>{pet.email}</td>
                                <td>{pet.telefone}</td>
                                <td>{pet.cep}</td>
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

export default Pets
