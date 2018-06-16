//importamos body-parse y express
var bodyParser = require('body-parser')
var express = require('express')

// declaramos la variable app como instancia de express
var app = express()

//importamos las rutas del recurso para autos
var auto = require('./routes/auto')

var country = require('./routes/country')

//var api_currency = require('./routes/currency')

var marca = require('./routes/marca')

var modelo = require('./routes/modelo')

var anio = require('./routes/anio')

var version = require('./routes/version')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// estas son las capas de seguridad, control de cabeceras y acceso
app.use(function(req,res,next){
    //puede ser consumid desde cualquier lugar
    res.header('Access-Control-Allow-Origin', '*');
    //cabeceras permitidas
    res.header('Access-Control-Allow-Headers', 'X-API-KEY,Origin,X-Request-Width,Content-Type,Accept,Access-Control-Request-Method');
    //Metodos permitidos
    res.header('Access-Control-Allow-Methods','GET,POS,PUT,DELETE');
    res.header('Allow','GET,POST,PUT,DELETE')
    next()
})
//url de la api
app.use('/api',auto),
app.use('/api',country),
app.use('/api',marca),
app.use('/api',modelo);
app.use('/api',anio);
app.use('/api',version);


//app.use('/api',country);

//para utilizarlo ebn otyros ficheros e importar
module.exports = app;
