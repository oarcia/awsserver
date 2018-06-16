'use strict'
var database = require('../database'),
mongoose = require('mongoose'),
Schema = mongoose.Schema;

//reprenta el tipo de documentos en la base

var ModeloSchema = new Schema(
    {
        nombre: {
            type: String,
            trim: true,
            default: '',
            required: 'Inserta un nombre del modelo por favor',
            index:{
                unique:false,
                dropdups: true
                //id_marca:{type:Schema.objectID,required:'Inserta una marca del modelo por favor'}
        },
        id_marca:{type:Schema.objectID,required:'Inserta una marca del modelo por favor'}
    },
    //id_marca:{type:Schema.objectID,required:'Inserta una marca del modelo por favor'}
},
    {
        timestamps:true
    }
);

var Modelo = mongoose.model('Modelo',ModeloSchema);
module.exports = Modelo;