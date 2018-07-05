var api = {}

api.lista = function(req, res){
    var produto = {
            "id": 1,
            "nome": "Rasteira Tira Dedo",
            "rt": "0568",
            "numero": "03.07.0653",
            "preco": "69.00",
            "precoDesconto": "55.20",
            "descricao": "Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.",
            "tamanho": [
              33,
              34,
              35,
              36,
              37,
              38,
              39,
              40,
              41,
              42  
            ],
            "cor": [
                "magenta",
                "fuscia",
                "marrom",
                "preto"
            ]     
    };

    res.json(produto);

};

module.exports = api;

