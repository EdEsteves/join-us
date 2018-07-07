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
                { text: 'magenta', value: 1, url: "../../static/cores/ellipse1-25px.png", codigoCor: "#A9095E"},
                { text: 'fuscia', value: 2, url: "../../static/cores/ellipse2-25px.png", codigoCor: "#6B85C1"},
                { text: 'marrom', value: 3, url: "../../static/cores/ellipse3-25px.png", codigoCor: "#A14830"},
                { text: 'preto', value: 4, url: "../../static/cores/ellipse4-25px.png", codigoCor: "#000000"}
            ]     
    };

    res.json(produto);

};

module.exports = api;

