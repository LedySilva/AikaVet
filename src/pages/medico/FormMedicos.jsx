import React, { useEffect } from "react";
import { Col, Form, Row, Button, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { mask, unMask } from "remask";
import Box from "../../components/Box";
import apiCep from "../../services/apiCep";
import MedicosService from "../../services/clinica/MedicosService";
import validators from "../../validators/MedicosValidators";
import _ from "lodash";

const FormMedicos = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      const medico = MedicosService.get(id);
      for (let campo in medico) {
        setValue(campo, medico[campo]);
      }
    }
  }, [props, setValue]);
  function enviarDados(dados) {
    const id = props.match.params.id;
    id ? MedicosService.update(dados, id) : MedicosService.create(dados);
    props.history.push("/medico");
  }
  function formatarMascaraMoeda(event) {
    const name = event.target.name;
    let mascara = "9";
    let valor = parseInt(_.replace(event.target.value, ".", "")) + "";
    const tamanho = valor.length;
    if (tamanho === 1) {
      mascara = "0.09";
    } else if (tamanho === 2) {
      mascara = "0.99";
    } else if (tamanho > 2) {
      mascara = _.repeat("9", tamanho - 2) + ".99";
    }
    valor = mask(valor, mascara);
    setValue(name, valor);
  }

  function handleChange(event) {
    const name = event.target.name;
    const mascara = event.target.getAttribute("mask");
    let valor = unMask(event.target.value);
    valor = mask(valor, mascara);
    setValue(name, valor);
  }
  function handleCep(event) {
    const valor = unMask(event.target.value);
    apiCep.get(`/ws/${valor}/json/`).then((resultado) => {
      const endereco = resultado.data;
      setValue("logradouro", endereco.logradouro);
      setValue("bairro", endereco.bairro);
      setValue("complemento", endereco.complemento);
      setValue("uf", endereco.uf);
      setValue("municipio", endereco.localidade);
    });
  }

  return (
    <>
      <Box title="Cadastro Medicos">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="nome">
            <Form.Label column sm={2}>
              Nome: <span class="obrigatorio">*</span>
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                {...register("nome", validators.nome)}
              />
              {errors.nome && (
                <span className="text-danger">{errors.nome.message}</span>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="crmv">
            <Form.Label column sm={2}>
              CRMV: <span class="obrigatorio">*</span>
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                type="text"
                {...register("crmv", validators.crmv)}
              />
              {errors.crmv && (
                <span className="text-danger">{errors.crmv.message}</span>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="matricula">
            <Form.Label column sm={2}>
              Matrícula: <span class="obrigatorio">*</span>
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                type="text"
                {...register("matricula", validators.matricula)}
              />
              {errors.matricula && (
                <span className="text-danger">{errors.matricula.message}</span>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="salario">
            <Form.Label column sm={2}>
              Salário:
            </Form.Label>
            <Col sm={3}>
              <InputGroup>
                <InputGroup.Text>R$</InputGroup.Text>
                <Form.Control
                  type="text"
                  {...register("salario", validators.salario)}
                  onChange={formatarMascaraMoeda}
                />
                {errors.salario && (
                  <span className="text-danger">{errors.salario.message}</span>
                )}
              </InputGroup>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="email">
            <Form.Label column sm={2}>
              Email: <span class="obrigatorio">*</span>
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                type="email"
                {...register("email", validators.email)}
              />
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="telefone">
            <Form.Label column sm={2}>
              Telefone: <span class="obrigatorio">*</span>
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                type="text"
                {...register("telefone", validators.telefone)}
                mask="(99) 99999-9999"
                onChange={handleChange}
              />
              {errors.telefone && (
                <span className="text-danger">{errors.telefone.message}</span>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="logradouro">
            <Form.Label column sm={2}>
              Logradouro: 
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                {...register("logradouro", validators.logradouro)}
              />
              {errors.logradouro && (
                <span className="text-danger">{errors.logradouro.message}</span>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="complemento">
            <Form.Label column sm={2}>
              Complemento: 
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                {...register("complemento", validators.complemento)}
              />
              {errors.complemento && (
                <span className="text-danger">
                  {errors.complemento.message}
                </span>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="numero">
            <Form.Label column sm={2}>
              Número: 
            </Form.Label>
            <Col sm={1}>
              <Form.Control
                type="text"
                {...register("numero", validators.numero)}
              />
              {errors.numero && (
                <span className="text-danger">{errors.numero.message}</span>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="bairro">
            <Form.Label column sm={2}>
              Bairro: 
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                {...register("bairro", validators.bairro)}
              />
              {errors.bairro && (
                <span className="text-danger">{errors.bairro.message}</span>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="cep">
            <Form.Label column sm={2}>
              CEP: 
            </Form.Label>
            <Col sm={2}>
              <Form.Control
                type="text"
                {...register("cep", validators.cep)}
                mask="99999-999"
                onChange={handleChange}
                onBlur={handleCep}
              />
              {errors.cep && (
                <span className="text-danger">{errors.cep.message}</span>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="uf">
            <Form.Label column sm={2}>
              UF: 
            </Form.Label>
            <Col sm={1}>
              <Form.Control type="text" {...register("uf")} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="municipio">
            <Form.Label column sm={2}>
              Município: 
            </Form.Label>
            <Col sm={3}>
              <Form.Control type="text" {...register("municipio")} />
            </Col>
          </Form.Group>
          <div className="text-center">
            <Button variant="dark" onClick={handleSubmit(enviarDados)}>
              <FaCheck /> Salvar
            </Button>
            <Link className="btn btn-info ml-3" to="/medico">
              <FaArrowLeft /> Voltar
            </Link>
          </div>
        </Form>
      </Box>
    </>
  );
};

export default FormMedicos;
