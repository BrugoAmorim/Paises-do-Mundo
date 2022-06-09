
const criarmodeloSimples = require('../Models/modeloSimples.js').criarModel;

function modelocustomizado(req){

    const modelo = criarmodeloSimples();

    modelo.Nome = req["nome"]["abreviado"];
    modelo.Area = req.area.total + " " + req.area.unidade.símbolo;
    modelo.Capital = req.governo.capital.nome;

    req["linguas"].map((item) => {

        let nomelingua = item.nome;
        modelo["Linguas"].push(nomelingua);
    })

    req["unidades-monetarias"].map((item) => {

        let tipomoeda = item.nome;
        modelo["Moeda"].push(tipomoeda);
    })

    return modelo;
}

module.exports = { modelocustomizado };