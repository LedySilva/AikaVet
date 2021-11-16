import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router'
import Pets from './pages/pet/Pets'
import FormPets from './pages/pet/FormPets'
import Consultas from './pages/consulta/Consultas'
import FormConsultas from './pages/consulta/FormConsultas'
import Medicos from './pages/medico/Medicos'
import FormMedicos from './pages/medico/FormMedicos'
import Exames from './pages/exame/Exames'
import FormExames from './pages/exame/FormExames'
import Vacinas from './pages/vacina/Vacinas'
import FormVacinas from './pages/vacina/FormVacinas'
import Incial from './pages/Inicio'


const Rotas = () => {
    return (
        <Container className="mt-3">
            <Switch>
                <Route exact path="/" component={Incial} />
                <Route exact path="/consulta" component={Consultas} />
                <Route exact path="/consulta/create" component={FormConsultas} />
                <Route exact path="/consulta/:id" component={FormConsultas} />
                <Route exact path="/pet" component={Pets} />
                <Route exact path="/pet/create" component={FormPets} />
                <Route exact path="/pet/:id" component={FormPets} />
                <Route exact path="/exame" component={Exames} />
                <Route exact path="/exame/create" component={FormExames} />
                <Route exact path="/exame/:id" component={FormExames} />
                <Route exact path="/medico" component={Medicos} />
                <Route exact path="/medico/create" component={FormMedicos} />
                <Route exact path="/medico/:id" component={FormMedicos} />
                <Route exact path="/vacina" component={Vacinas} />
                <Route exact path="/vacina/create" component={FormVacinas} />
                <Route exact path="/vacina/:id" component={FormVacinas} />
            </Switch>
        </Container >
    )
}

export default Rotas
