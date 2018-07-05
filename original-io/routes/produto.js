module.exports = function(app){
    var api = app.api.produto;
    app.get('/v1/produto', api.lista);
};