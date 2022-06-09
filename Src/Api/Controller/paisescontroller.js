
const fetch = require('cross-fetch');

const criarmodeloSimples = require('../Utils/paisesutils.js');

async function buscarPaises(req, res){

    let url = "https://servicodados.ibge.gov.br/api/v1/paises/br";
    
    const resposta = await fetch(url);
    const caixote = await resposta.json();

    const paises = [];
    caixote.map((item) => {

        const infoPais = criarmodeloSimples.modelocustomizado(item);
        paises.push(infoPais);
    })

    res.send(paises);
}

module.exports = { buscarPaises };