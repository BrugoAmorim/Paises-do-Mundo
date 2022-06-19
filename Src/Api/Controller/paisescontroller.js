
const fetch = require('cross-fetch');

const conversor = require('../Utils/paisesutils.js');

async function listarPaises(req, res){

    let nomePais = req.body.nomePais;
    if(nomePais === "")
        nomePais = "";

    let url = "https://servicodados.ibge.gov.br/api/v1/paises/" + nomePais;
        
    const resposta = await fetch(url);
    const caixote = await resposta.json();

    let arrayformatado = [];
    caixote.map((item) => {

        arrayformatado.push(conversor.modelocustomizado(item));
    })

    let arraysemRepeticaoItens = [];
    arrayformatado.map((data) => {

        let json = arraysemRepeticaoItens.filter(x => x["Nome"]["Pais"] == data["Nome"]["Pais"]);
        if(json.length == 0)
            arraysemRepeticaoItens.push(data);
    })

    res.render('home', { colecao: arraysemRepeticaoItens})
}

module.exports = { listarPaises };
