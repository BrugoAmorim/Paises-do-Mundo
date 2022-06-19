
const fetch = require('cross-fetch');
const conversor = require('../Utils/paisesutils.js');

async function listarPaises(req, res){

    let url = "https://servicodados.ibge.gov.br/api/v1/paises/";
    const resposta = await fetch(url);
    const caixote = await resposta.json();

    let arrayformatado = [];
    caixote.map((item) => {

        arrayformatado.push(conversor.modelocustomizado(item));
    })

    let listasemRepeticao = conversor.tirarRepeticoes(arrayformatado);
    let filtrado = listasemRepeticao.filter(x => x["Nome"]["Pais"] === req.body.nomePais);
    
    if(filtrado.length == 0)
        res.render('home', {colecao: listasemRepeticao})
    else
        res.render('home', {colecao: filtrado})
}

module.exports = { listarPaises };
