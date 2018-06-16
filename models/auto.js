'use strict';

//var databese =require('../database'),
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var AutoSchema = new Schema(
    {
        marca: {
            type: String,
            trim: true,
            default: '',
            required: 'Inserta una marca por favor',
            index: {
                unique: false
            }
        },
        modelo: {
            type: String,
            required: 'Inserta un modelo por favor',
            default: '',
            index: {
                unique: false
            }
        },
        anio: {
            type: Number,
            trim: true,
            required: 'Inserta un año por favor',
            default: '',
            index: {
                unique: false
            }
        },

        version: {
            type: String,
            trim: true,
            required: 'Inserta una version favor',
            default: '',
            index: {
                unique: false
            }
        },
        colores: [String],
        motorInfo: {
            transmision: {
                type : String,
                required: 'Inserta una trasnmision por favor',
                default:'',
                index: {
                      unique: false,
                      dropDups:true      
                },
                enum:[
                    'manual',
                    'automatico'
                ]
            },
        }
    },

    {
        timestamps: true
    }
);



var Auto = mongoose.model('Auto', AutoSchema)

module.exports = Auto;