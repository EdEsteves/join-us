const app = require('./config-server/express')();

const port = process.env.PORT || 3000

app.listen(port, function(){
    console.log('Servidor rodando com sucesso na porta' + port);
})