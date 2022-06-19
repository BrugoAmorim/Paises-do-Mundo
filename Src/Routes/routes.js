
const myapp = require('../servers.js').myapp;

const controllerPaises = require('../Api/Controller/paisescontroller.js');

myapp.get('/paisesdomundo', controllerPaises.listarPaises)

myapp.post('/paisesdomundo', controllerPaises.listarPaises)