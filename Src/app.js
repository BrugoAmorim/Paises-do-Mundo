
const Express = require('express');
const myapp = Express();

module.exports = { Express, myapp };

myapp.listen(5000, () => {

    console.log("Servidor rodando")
})