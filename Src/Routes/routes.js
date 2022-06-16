
const myapp = require('../servers.js').myapp;

const controllerPaises = require('../Api/Controller/paisescontroller.js');

myapp.get('/buscar-paises', controllerPaises.buscarPaises);