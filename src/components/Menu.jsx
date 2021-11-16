import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">AikaVet</Navbar.Brand>
                    <Nav className="me-auto">
                    <Link className="nav-link" to="/pet">Pets</Link>
                        <Link className="nav-link" to="/medico">Médicos</Link>
                        <Link className="nav-link" to="/consulta">Consultas</Link>
                        <Link className="nav-link" to="/exame">Exames</Link>
                    
                        <Link className="nav-link" to="/vacina">Vacinas</Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Menu
