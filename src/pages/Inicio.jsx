import React, { useEffect, useState } from "react";
import { Table, Image, Popover, OverlayTrigger, Row, Col, ListGroup, Badge } from "react-bootstrap";
import { Link } from 'react-router-dom'
import ImagemPets from '../images/pets.jpg'
import ImagemVacina from '../images/vacina.png'
import ImagemMedico from '../images/medico.jpg'
import ImagemExame from '../images/exame.jpg'
import ImagemConsulta from '../images/consulta.jpg'
import ConsultasService from '../services/clinica/ConsultasService'
import ExamesService from '../services/clinica/ExamesService'
import VacinasService from '../services/clinica/VacinasService'
import _ from "lodash"


const Inicio = () => {
  return (
    <>

      <Row>
        <Col sm={2}>
        
          <Link className="nav-link" to="/consulta">
            <OverlayTrigger
              key={"tooltipConsulta"}
              placement="auto"
              overlay={
                <Popover id={"popoverConsulta"}>
                  <Popover.Header as="h3">Consultas</Popover.Header>
                  <Popover.Body>
                    <p>Agendamentos de consultas de pets e médicos</p>
                  </Popover.Body>
                </Popover>
              }
            >
              <Image src={ImagemConsulta} id="ImagemInicial"></Image>
            </OverlayTrigger>
          </Link>

          <Link className="nav-link" to="/pet">
            <OverlayTrigger
              key={"tooltipPets"}
              placement="auto"
              overlay={
                <Popover id={"popoverPets"}>
                  <Popover.Header as="h3">Pets</Popover.Header>
                  <Popover.Body>
                    <p>Criação e manutenção do cadastro de pets da Aikavet</p>
                  </Popover.Body>
                </Popover>
              }
            >
            <Image src={ImagemPets} id="ImagemInicial"></Image>
            </OverlayTrigger>
          </Link>
          
          <Link className="nav-link" to="/medico">
            <OverlayTrigger
              key={"tooltipMedico"}
              placement="auto"
              overlay={
                <Popover id={"popoverMedico"}>
                  <Popover.Header as="h3">Medicos Veterinários</Popover.Header>
                  <Popover.Body>
                    <p>Cadastro de médicos que atendem na Aikavet</p>
                  </Popover.Body>
                </Popover>
              }
            >
            <Image src={ImagemMedico} id="ImagemInicial"></Image>
            </OverlayTrigger>
          </Link>

          <Link className="nav-link" to="/exame">
            <OverlayTrigger
              key={"tooltipExame"}
              placement="auto"
              overlay={
                <Popover id={"popoverExame"}>
                  <Popover.Header as="h3">Exames</Popover.Header>
                  <Popover.Body>
                    <p>Registro dos exames solicitados para os pets</p>
                  </Popover.Body>
                </Popover>
              }
            >
            <Image src={ImagemExame} id="ImagemInicial"></Image>
            </OverlayTrigger>
          </Link>

          <Link className="nav-link" to="/vacina">
            <OverlayTrigger
                key={"tooltipVacina"}
                placement="auto"
                overlay={
                  <Popover id={"popoverVacina"}>
                    <Popover.Header as="h3">Vacina</Popover.Header>
                    <Popover.Body>
                      <p>Registro das vacina aplicadas nos pets</p>
                    </Popover.Body>
                  </Popover>
                }
              >
              <Image src={ImagemVacina} id="ImagemInicial"></Image>
            </OverlayTrigger>
          </Link>

        </Col>

        <Col sm={10}>
          
          <h4>Consultas <Badge variant="primary" pill>{(_.filter(ConsultasService.getAll(), function (c) { return c.situacao === "agendado" })).length}</Badge></h4>
          <ListGroup>
            {(_.orderBy(_.filter(ConsultasService.getAll(), function (c) { return c.situacao === "agendado" }), ["data", "horario"], ["DESC", "DESC"])).map((consulta, i) => (
                  <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <Col sm={10}>
                      <div className="fw-bold">{consulta.nome_pet}</div>
                      <div>Dr(a) {consulta.medico}</div>
                    </Col>
                    <Col sm={2}>
                      <div className="fw-bold text-right">{consulta.data}</div>
                      <div className="text-right">{consulta.horario}</div>
                    </Col>
                </ListGroup.Item>
            ))}
          </ListGroup>
          <br/>


          <h4>Exames <Badge variant="primary" pill>{(_.filter(ExamesService.getAll(), function (e) { return e.situacao === "agendado" })).length}</Badge></h4>
          <ListGroup>
            {(_.orderBy(_.filter(ExamesService.getAll(), function (e) { return e.situacao === "agendado" }), ["data", "horario"], ["DESC", "DESC"])).map((exame, i) => (
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                  <Col sm={4}> 
                    <div className="fw-bold">{exame.nome_pet}</div>
                    <div>Dr(a) {exame.medico}</div>
                  </Col>
                  <Col sm={5}>
                    <div className="fw-bold text-left">{exame.exame}</div>
                  </Col>
                  <Col sm={2}>
                    <div className="fw-bold text-right">{exame.data}</div>
                    <div className="text-right">{exame.horario}</div>
                  </Col>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <br/>


          <h4>Vacinas <Badge variant="primary" pill>{(_.filter(VacinasService.getAll(), function (v) { return v.situacao === "agendado" })).length}</Badge></h4>
          <ListGroup>
            {(_.orderBy(_.filter(VacinasService.getAll(), function (v) { return v.situacao === "agendado" }), ["data", "horario"], ["DESC", "DESC"])).map((vacina, i) => (
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                  <Col sm={4}>
                    <div className="fw-bold">{vacina.nome_pet}</div>
                    <div>Dr(a) {vacina.medico}</div>
                  </Col>
                  <Col sm={6}>
                    <div className="fw-bold text-left">{vacina.vacina}</div>
                  </Col>
                  <Col sm={2}>
                    <div className="fw-bold text-right">{vacina.data}</div>
                    <div className="text-right">{vacina.horario}</div>
                  </Col>
              </ListGroup.Item>
            ))}
          </ListGroup>

        </Col>

      </Row>
      
    </>
  );
};

export default Inicio;
