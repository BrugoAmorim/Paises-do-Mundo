
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

function ModelSimples(){

    let objJson = {

        sigla: '',
        pais: '',
        M49: '',
        abreviado: '',
        area: '',
        capital: '',
        regiao: '',
        subregiao: '',
        regiaointermediaria: ''
    }

    return objJson;
}

module.exports = { ModelComposto, ModelSimples };
