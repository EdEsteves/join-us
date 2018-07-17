module.exports = function(app){
    var api = app.api.produto;

    app.get('/v1/produtos', api.lista);

    app.get('/v1/produto/:id', api.buscaPorId);
};