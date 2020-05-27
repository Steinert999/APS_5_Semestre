const expres = require('express');
const ControllerConfirmed = require('./controller/ControllerConfirmed')
const ControllerStates = require('./controller/ControllerStates')
const ControllerSul = require('./controller/ControllerSul')
const ControllerLogin = require('./controller/ControllerLogin')

const routes = new expres.Router();

// MIDDLEWARE, interceptador de chamadas do servidor. ( as rotas )
routes.get('/users', ControllerLogin.all_users)
routes.post('/cadastro', ControllerLogin.create)
routes.get('/confirmados', ControllerConfirmed.getData);
routes.get('/estado/:estado', ControllerStates.getStatesData);
routes.get('/sul', ControllerSul.getSouthData);

module.exports = routes;