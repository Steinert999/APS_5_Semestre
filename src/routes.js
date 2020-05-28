const expres = require('express');
const ControllerConfirmed = require('./controller/ControllerConfirmed')
const ControllerStates = require('./controller/ControllerStates')
const ControllerSul = require('./controller/ControllerSul')
const ControllerLogin = require('./controller/ControllerLogin')

const routes = new expres.Router();

// MIDDLEWARE, interceptador de chamadas do servidor. ( as rotas )
routes.post('/cadastro', ControllerLogin.registerUser)
routes.post('/login', ControllerLogin.login)
routes.get('/users', ControllerLogin.allUsers)
routes.get('/confirmados', ControllerConfirmed.getData);
routes.post('/estado', ControllerStates.getStatesData);
routes.get('/sul', ControllerSul.getSouthData);

module.exports = routes;