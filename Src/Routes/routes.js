
const myapp = require('../app.js').myapp;
const controllerPaises = require('../Api/Controller/paisescontroller.js');

myapp.get('/', (req, res) => {

    res.send("ola mundo");
})

myapp.get('/buscar-paises', controllerPaises.buscarPaises);