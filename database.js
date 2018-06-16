'use strict';

//importamos monggose
var mongoose = require('mongoose'),
//archivo de configuracion
config = require('./config.js')

var connection = mongoose.connect(config.database, function(err){
    if (err){
        console.log('error al conectar ala base de datos');
    }else{
        console.log('conexion ala base de datos correcta')
    }
});