const expres = require('express');
const ControllerConfirmed = require('./controller/ControllerConfirmed')
const ControllerStates = require('./controller/ControllerStates')
const ControllerSul = require('./controller/ControllerSul')


const routes = new expres.Router();

// MIDDLEWARE, interceptador de chamadas do servidor. ( as rotas )
routes.get('/confirmados', ControllerConfirmed.getData);
routes.get('/estado/:estado', ControllerStates.getData);
routes.get('/sul', ControllerSul.getData);

module.exports = routes;