'use strinct'

//importamos app.js

var app = require('./app');
var database = require('./database');
//puerto de varianle de entorno de produccion o uso especifico

var port = process.env.PORT ||  7070

app.listen(port, function(){
    console.log('esto es un ejemplo de una API PUERTO ' + port)
})