import { React, useEffect } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { mask, unMask } from "remask";
import Box from "../../components/Box";
import apiCep from "../../services/apiCep";
import PetsService from "../../services/clinica/PetsService";
import validators from "../../validators/PetsValidators.js";

const FormPets = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      const pet = PetsService.get(id);
      for (let campo in pet) {
        setValue(campo, pet[campo]);
      }
    }
  }, [props, setValue]);
  function enviarDados(dados) {
    console.log("dados", dados);
    const id = props.match.params.id;
    id ? PetsService.update(dados, id) : PetsService.create(dados);
    props.history.push("/pet");
  }
  function handleChange(event) {
    const name = event.target.name;
    const mascara = event.target.getAttribute("mask");
    let valor = unMask(event.target.value);
    valor = mask(valor, mascara);
    setValue(name, valor);
    console.log("alteracao ", name, valor);
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
      <Box title="Cadastro Pets">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="nome">
            <Form.Label column sm={2}>
              Nome tutor: <span class="obrigatorio">*</span>
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

          <Form.Group as={Row} className="mb-3" controlId="nome_pet">
            <Form.Label column sm={2}>
              Nome pet: <span class="obrigatorio">*</span>
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                {...register("nome_pet", validators.nome_pet)}
              />
              {errors.nome_pet && (
                <span className="text-danger">{errors.nome_pet.message}</span>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="cpf">
            <Form.Label column sm={2}>
              CPF: <span class="obrigatorio">*</span>
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                type="text"
                {...register("cpf", validators.cpf)}
                mask="999.999.999-99"
                onChange={handleChange}
              />
              {errors.cpf && (
                <span className="text-danger">{errors.cpf.message}</span>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="email">
            <Form.Label column sm={2}>
              Email: 
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                type="text"
                {...register("email", validators.email)}
              />
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="telefone">
            <Form.Label column sm={2}>
              Telefone: 
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
              Cep: 
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
            <Link className="btn btn-info ml-3" to="/pet">
              <FaArrowLeft /> Voltar
            </Link>
          </div>
        </Form>
      </Box>
    </>
  );
};

export default FormPets;
