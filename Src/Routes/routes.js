
const myapp = require('../app.js').myapp;
const fetch = require('cross-fetch');

myapp.get('/', (req, res) => {

    res.send("ola mundo");
})

myapp.get('/buscar-paises', async (req, res) => {

    let url = "https://servicodados.ibge.gov.br/api/v1/paises/br";
    
    const resposta = await fetch(url);
    const caixote = await resposta.json();

    res.send(caixote);
})