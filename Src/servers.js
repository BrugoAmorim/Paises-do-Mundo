
const Express = require('express');
const myapp = Express();
const handlebars = require('express-handlebars');

myapp.use(Express.static("../../Public"));

myapp.engine('handlebars', handlebars.engine());
myapp.set('view engine', 'handlebars');
myapp.set('views', '../../Views');

const bodyParser = require('body-parser');
myapp.use(bodyParser.urlencoded({extended: true}));
myapp.use(bodyParser.json());

module.exports = { Express, myapp };

myapp.listen(5000, () => {

    console.log("Servidor rodando")
})