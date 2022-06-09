
function ModelComposto(){

    let modeloComposto = {

        Id: {
            M49: '',
            Abreviado: ''   
        },
        Nome: {
            Sigla: '',
            Pais: ''
        },
        Capital: '',
        Moeda: [],
        Area: '',
        Localizacao: {
            Regiao: '',
            SubRegiao: '',
            RegiaoIntermediaria: ''
        },
        Linguas: []
    };

    return modeloComposto;
}

function ModelSimples(req){

    const arraySimples = {

        sigla: req["id"]["ISO-3166-1-ALPHA-2"],
        pais: req["nome"]["abreviado"],
        M49: req["id"]["M49"],
        abreviado: req["id"]["ISO-3166-1-ALPHA-3"],
        area: req.area.total + " " + req.area.unidade["símbolo"],
        capital: req.governo.capital.nome,
        regiao: req["localizacao"]["regiao"]["nome"],
        subregiao: req["localizacao"]["sub-regiao"]["nome"],
        regiaointermediaria: req["localizacao"]["regiao-intermediaria"]["nome"]        
    };

    return arraySimples;
}

module.exports = { ModelComposto, ModelSimples };
