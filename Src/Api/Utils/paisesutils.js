
const { json } = require('body-parser');
const { info } = require('console');
const criarmodelo = require('../Models/modelspaises.js');

function converterModelPadrao(req){
    
    let arraySimples = criarmodelo.ModelSimples();
    arraySimples.sigla = req["id"]["ISO-3166-1-ALPHA-2"];
    arraySimples.pais = req["nome"]["abreviado"]; 
    arraySimples.M49 = req["id"]["M49"];
    arraySimples.abreviado = req["id"]["ISO-3166-1-ALPHA-3"];
    arraySimples.area = req.area.total + " " + req.area.unidade["símbolo"];
    arraySimples.capital = req.governo.capital.nome;
    arraySimples.regiao = req["localizacao"]["regiao"]["nome"];

    if(req["localizacao"]["regiao-intermediaria"] === null){
        
        let InterReg = "Não disponibilizado";
        arraySimples.regiaointermediaria = InterReg;
    } 
    else
        arraySimples.regiaointermediaria = req["localizacao"]["regiao-intermediaria"]["nome"];

    if(req["localizacao"]["sub-regiao"] === null){
    
        let SubReg = "Não disponibilizado";
        arraySimples.subregiao = SubReg; 
    }
    else
        arraySimples.subregiao = req["localizacao"]["sub-regiao"]["nome"];


    return arraySimples;
}

function modelocustomizado(req){

    const modelo = criarmodelo.ModelComposto();
    const arraySimples = converterModelPadrao(req);

    modelo.Id.M49 = arraySimples.M49;
    modelo.Id.Abreviado = arraySimples.abreviado;
    modelo.Nome.Sigla = arraySimples.sigla;
    modelo.Nome.Pais = arraySimples.pais;
    modelo.Capital = arraySimples.capital;
    modelo.Area = arraySimples.area;
    modelo.Localizacao.Regiao = arraySimples.regiao;
    modelo.Localizacao.SubRegiao = arraySimples.subregiao;
    modelo.Localizacao.RegiaoIntermediaria = arraySimples.regiaointermediaria;

    req["linguas"].map((item) => {

        let infoLinguas = {

            Sigla: item["id"]["ISO-639-1"],
            Lingua: item.nome,
        }
      
        modelo["Linguas"].push(infoLinguas);
    })

    req["unidades-monetarias"].map((item) => {

        let tipomoeda = item.nome;
        modelo["Moeda"].push(tipomoeda);
    })
    return modelo;
}

function tirarRepeticoes(req){

    let arraysemRepeticaoItens = [];

    req.map((item) => {

        let infoPais = item;
        let jsonpais = req.filter(x => x["Nome"]["Pais"] == item["Nome"]["Pais"]);
        
        // metodo que permiti adicionar diversas linguas de um país em um unico array
        jsonpais.map((data)=> {

            data["Linguas"].map((lingua) => {

                let buscarlingua = infoPais.Linguas.filter(x => x == lingua);

                if(buscarlingua.length == 0)
                    infoPais.Linguas.push(lingua)

            })
        })

        let json = arraysemRepeticaoItens.filter(x => x["Nome"]["Pais"] == item["Nome"]["Pais"]);
        if(json.length == 0)
            arraysemRepeticaoItens.push(item);
    })

    return arraysemRepeticaoItens;
}

module.exports = { modelocustomizado, tirarRepeticoes };