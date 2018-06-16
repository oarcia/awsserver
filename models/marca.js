'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

//var Modelo = require('./Modelo')

//Representa el tipo de documentos de la base de datos
var MarcaSchema = new Schema(
    {
        nombre: {
            type: String,
            trim: true,
            default: '',
            required: 'Inserta un nombre de la marca por favor',
            index: {
                unique :true,
                dropDups: true
            }
        },
        pais: {
            type: String,
            trim: true,
            default: '',
            required: ' Iserta un pais de la marca por favor',
            index: {
                unique: false,
                dropDups: true
            }
        },
        fechaCreacion:{
            type: Date,
            trim: true,
            default: '',
            required: 'Inserta una fecha de creacion por favor',
            index: {
                unique: false,
                dropDups: true
            }
        }
    },
    {
        timestamps:true
    }
);

var Marca = mongoose.model('Marca', MarcaSchema);
module.exports = Marca;

/*'use strict'
var database = require('../database'),
mongoose = require('mongoose'),
Schema = mongoose.Schema;

//var Modelo = require('./Modelo')
//reprenta el tipo de documentoas de la bd

var MarcaSchema = new Schema(
    {
        nombre: {
            type: String,
            trim: true,
            default:'',
            required: 'Inserta un nombre de la marca por favor',
            index:{
                unique:false
               // dropDups:true
            }
        },
        pais: {
            type: String,
            trim:true,
            default:'',
            required:'Inserta un pais de la marca por favor',
            index:{
                unique: false,
                dropDups:true
            }

        },
        fechaCreacion:{
            type:Date,
            trim:true,
            default:'',
            required:'Inserta una fecha de creacion',
            index:{
                unique:false,
                dropDups:true
            }
        }
        //modelos: [Modelo.schema]
    },
    {
        timestamps:true
    }
);
var Marca = mongoose.model('Marca',MarcaSchema);
module.exports = Marca;*/