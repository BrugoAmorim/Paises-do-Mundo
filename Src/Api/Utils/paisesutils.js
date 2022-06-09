
const criarmodelo = require('../Models/modeloComposto.js');

function modelocustomizado(req){

    const modelo = criarmodelo.ModelComposto();
    const arraySimples = criarmodelo.ModelSimples(req);

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

module.exports = { modelocustomizado };