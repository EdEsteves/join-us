var api = {}

var produtos = [
    {
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
            { text: 'fucsia', value: 2, url: "../../static/cores/ellipse2-25px.png", codigoCor: "#6B85C1"},
            { text: 'marrom', value: 3, url: "../../static/cores/ellipse3-25px.png", codigoCor: "#A14830"},
            { text: 'preto', value: 4, url: "../../static/cores/ellipse4-25px.png", codigoCor: "#000000"}
        ]     
    },
    {
        "id": 2,
        "nome": "Sapatilha",
        "rt": "0568",
        "numero": "04.08.0693",
        "preco": "99.00",
        "precoDesconto": "65.20",
        "descricao": "Sapatilha absurda",
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
            { text: 'fucsia', value: 2, url: "../../static/cores/ellipse2-25px.png", codigoCor: "#6B85C1"},
            { text: 'marrom', value: 3, url: "../../static/cores/ellipse3-25px.png", codigoCor: "#A14830"},
            { text: 'preto', value: 4, url: "../../static/cores/ellipse4-25px.png", codigoCor: "#000000"}
        ]     
    },
    {
        "id": 3,
        "nome": "Alpargata",
        "rt": "077",
        "numero": "03.07.0979",
        "preco": "109.00",
        "precoDesconto": "90.20",
        "descricao": "Alpargata insana",
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
            { text: 'fucsia', value: 2, url: "../../static/cores/ellipse2-25px.png", codigoCor: "#6B85C1"},
            { text: 'marrom', value: 3, url: "../../static/cores/ellipse3-25px.png", codigoCor: "#A14830"},
            { text: 'preto', value: 4, url: "../../static/cores/ellipse4-25px.png", codigoCor: "#000000"}
        ]     
    },
    {
        "id": 4,
        "nome": "Mocassins",
        "rt": "0878",
        "numero": "03.07.1053",
        "preco": "49.00",
        "precoDesconto": "25.20",
        "descricao": "Mocassins criminoso",
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
            { text: 'fucsia', value: 2, url: "../../static/cores/ellipse2-25px.png", codigoCor: "#6B85C1"},
            { text: 'marrom', value: 3, url: "../../static/cores/ellipse3-25px.png", codigoCor: "#A14830"},
            { text: 'preto', value: 4, url: "../../static/cores/ellipse4-25px.png", codigoCor: "#000000"}
        ]     
    }
];

api.lista = function(req, res){
    res.json(produtos);
},
api.buscaPorId = function(req, res) {
    var produto = produtos.find( function(produto){
        return produto.id == req.params.id;
    });
    if (!produto) throw new Error('Produto não encontrado');
    res.json(produto);
};

module.exports = api;

