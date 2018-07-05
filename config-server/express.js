const express = require('express');
const consign = require('consign');
const path = require('path');
var serveStatic = require('serve-static')

module.exports = function(){
    const app = express();

    app.use(express.urlencoded({extended: true}));

    app.use(serveStatic(path.join(__dirname, '../dist')));

    

    app.use(express.json());

    app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });

    consign()
        .include('api')
        .then('routes')
        .into(app);

    return app
}