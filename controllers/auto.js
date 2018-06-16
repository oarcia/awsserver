'use scrict'
var Auto = require('../models/auto')
var mongoose = require('mongoose')
//Definimos el método a ser consumido
//desde el archivo de rutas


function saveAuto(req, res) {
    //Definimos el objeto que se guardará como documento
    var auto = new Auto(req.body);

    auto.save(function (err, autoSaved) {
        if (err) {
            console.log(err)
            res.status(500).send({ message: 'Error al guardar el Auto.', error: err });
        } else {
            res.status(200).send({ saved: autoSaved })
        }
    });
};

function getAutos(req, res) {
    //Auto.find{}, function(arr,autos){
    //Para ordenar de manera descendente agregar -anio
    Auto.find({}).sort('anio').exec(function (err, autos) {
        if (err) {
            console.log(err)
            res.status(500).send({ message: 'Error al obtener los autos', error: err });
        } else {
            res.status(200).send({ autos })
        }
    });
}

function getAuto(req, res) {
    //Obtenemos el id que llega como parámetro
    var autoId = req.params.id;
    //Verificasmo si el parámetro enviado es un ObjectId
    var idValido = mongoose.Types.ObjectId.isValid(autoId);
    if (!idValido) {
        //Si no es valido mostramos un mensaje de Id inválido
        res.status(409).send({ message: 'Id Inválido.' });
    } else {
        //Buscaremos un documento por el Id Proporcionado
        Auto.findById(autoId, function (err, auto) {
            if (err) {
                console.log(err)
                res.status(500).send({ message: 'Error al obtener el auto', error: err });
            } else {
                if (!auto) {
                    res.status(404).send({ message: 'No existe el auto con el id proporcionado.' });
                } else {
                    res.status(200).send({ auto })
                }

            }
        });
    }
}

function updateAuto(req, res) {
    //Obtenemos el id que llega como parámetro
    var autoId = req.params.id;
    //Verificamos si el parámetro enviado es un ObjectId
    var idValido = mongoose.Types.ObjectId.isValid(autoId);
    if (!idValido) {
        //Si no es válido mostrarnos un mensaje de Id inválido
        res.status(409).send({ message: 'Id Inválido.' });
    } else {
        //Utilizamos la función findByIdAndupdate, busca un documento por id y lo actualiza
        /*Auto.findByIdAndUpdate(autoId, req.body, {new:true}, function(err, autoUpdate){
            if(err){
                console.log(err)
                res.status(500).send({message:'Error al actualizar el Auto.',error:err});
            }else{
                //Si no existe el documento con el id proporcionado mostramos un espantoso 404
                if(!autoUpdate){
                    res.status(404).send({message:'No existe el auto con el id proporcionado.'});
                }else{
                //Si se actualiza correctamente buscamos nuevamente en base, ya que el callback nos retorna
                //un objeto pero este no es el actualizado si no el viejo
                Auto.findById(autoId,function(err,autoNuevo){
                    //Buscamos por el ID y retornamos el registro viejo y el nuevo
                    res.status(200).send({viejo:autoUpdate,nuevo:autoNuevo})
                }); 
                }
            }
        });*/
        Auto.findByIdAndUpdate(autoId, req.body, { new: true }, function (err, autoUpdate) {
            if (err) {
                console.log(err)
                res.status(500).send({ message: 'Error al actualizar el Auto.', error: err });
            } else {
                if (!autoUpdate) {
                    res.status(404).send({ message: 'No existe el auto con el id proporcionado.' });
                } else {
                    res.status(200).send({ data: autoUpdate })
                }
            }
        });
    }
}



function deleteAuto(req, res) {
    //  Obtenemos el id que llega como parámetro
    var autoId = req.params.id;
    //  Verificamos si el parámetro enviado es un ObjectId
    var idValido = mongoose.Types.ObjectId.isValid(autoId);

    if (!idValido) {
        //Si noes válido mostramos un mensaje de Id Inválido
        res.status(409).send({ message: 'Id Inválido' });
    }
    else {
        Auto.findByIdAndRemove(autoId, function (err, auto) {
            if (err) {
                return res.status(500).send(err);
            } else {
                if (!auto) {
                    res.status(404).send({ message: 'No existe el auto con el id proporcionado.' });
                } else {
                    //res.status(200).send({data:autoUpdate})
                    res.status(200).send({ message: 'El auto se ha borrado exitosamente' })
                }
            }
        });
        //Buscaremos un documento con el Id Proporcionado
        //  Auto.findById(autoId,function(err,auto)
        //  {
        //    if (err){
        //        console.log(err)
        //        res.status(500).send({message:'Error al obtener el auto.',eror:err});
        //    }
        //    else
        //    {
        //        if(!auto)
        //        {
        //            res.status(404).send({message:'No existe el auto con el id proporcionado.'});
        //        }
        //        else 
        //        {
        //            //Eliminamos el auto encontrado
        //            auto.remove(function(err){
        //                if(err){
        //                    res.status(500).send({message:'Error al eliminar el auto.',error:er});
        //                }
        //                else
        //                {
        //                    res.status(200).send({message:'El auto se ha eliminado correctamente'});
        //                }
        //            });
        //        }
        //    }
        // });
    }
}






//Definimos los métodos que pueden ser alcanzables
module.exports = {
    getAuto,
    getAutos,
    saveAuto,
    updateAuto,
    deleteAuto
}

/*'use strict'
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Auto = require('../models/auto')
//importamos express puta aprende muy bien esta madre 
// ahorita ya esta completo el js de auto mañana le seguimos 28/05/2018

//definimos que nuestro esquema se podrallamar auto


//definimos el metodo a ser condsumido
// desde el archivo de rutas
function prueba(req, res) {
    if (req.params.id) {
        var id = req.params.id

    } else {
        var id = "SIN ID DEFINIDO"
    }
    res.status(200).send(
        {
            message: "este es el id " + id
        }
    )
}
//se definen la funciones que vamos a dar como parametros
function getAuto(req, res) {
    //obtenemos el id que llega como parametro
    var autoId = req.params.id;
    //verificamos si el parametro enviado es un objectId
    var idValido = mongoose.Types.ObjectId.isValid(autoId);
    if (!idValido) {
        res.status(409).send({ message: 'id invalido' });
    } else {
        Auto.findById(autoId, function (err, auto) {
            if (err) {
                console.log(err)
                res.status(500).send({ message: 'error al obtener el Auto', error: err });
            } else {
                if (!auto) {
                    res.status(404).send({ message: 'no existe el auto con el id proporcionado' });
                } else {
                    res.status(200).send({ auto })
                }
            }
        });
    }

}

function getAutos(req, res) {
    //console.log("Entre")
    //res.status(200).send({ metodo: "getAutos" })
    Auto.find({}).sort('anio').exec(function(err,autos){
        if(err){
            console.log(err)
            res.status(500).send({message:'Error al guardar el Auto.',error:err});
        }else{
            res.status(200).send({autos})
        }
    });
}

function saveAuto(req, res) {
    //var params = req.body;
    //res.status(200).send({ metodo: "updateAuto", auto: params })
    var auto = new Auto(req,body);
    auto.save(function(err,autoSaved){
        if(err){
            console.log(err)
            res.status(500).send({message:'error al guardar el auto',error:err});
        }else{
            res.status(200).send({data:autoSaved})
        }
    });
};

/*function updateAuto(req, res) {
   // var params = req.body;
    //res.status(200).send({ metodo: "updateAuto", auto: params }) esta madre se tenia que modificar
    //obtenemos el id como parametro
    var autoId = req.params.id;
    //verificamos si el parametro enviado es un objeciD
    var idValido = mongoose
}*/

/*function deleteAuto(req, res) {
    var params = req.body;
    res.status(200).send({ metodo: "deleteAuto", auto: params })
}

function saveAuto(req, res) {
    //definimos el objeto que se guarda como duocumento en mongo db
    var auto = new Auto(req.body);

    auto.save(function (err, autoSaved) {
        if (err) {
            console.log(err)
            res.status(500).send({ message: 'error al guardar el auto.', error: err });
        } else {
            res.status(200).send({ saved: autoSaved })
        }
    });
}

/*function getAutos(req, res) {
    //para ordebar demanera descendente agrega anio
    Auto.find({}).sort('anio').exec(function (err, autos) {
        if (err) {
            console.log(err)
            res.status(500).send({ message: 'Error al obtener los autos.', error: err });
        } else {
            res.status(200).send({ autos })
        }
    });
}*/

/*function getAuto(req, res) {
    var autoId = req.params.id;
    //verificamos si el parametro enviado es un ObjectId
    var idValido = mongoose.Types.ObjectId.isValid(autoId);
    if (!idValido) {
        res.status(409).send({ message: 'Id Invalido.' });
        // si no es valido mostramos un mensaje de id invalido
    } else {
        Auto.findById(autoId, function (err, auto) {
            if (err) {
                console.log(err)
                //res.status(404).send({ message: 'No existe el auto con el id proporcionado' });
                res.status(500).send({
                    message: 'Error interno del sistema'
                })
            } else {
                if (!auto) {
                    res.status(404).send({
                        message: 'Auto not found'
                    })
                } else {
                    res.status(200).send({ data: auto })
                }
            }
        });
    }
}*/
/*
function updateAuto(req, res) {
    //obtenemos el id que llega como parametro
    var autoId = req.params.id;
    //verificamos siu el parametro enviado es un objectId
    var idValido = mongoose.Types.ObjectId.isValid(autoId);
    if (!idValido) {
        res.status(409).send({ message: 'id invalido.' });
    } else {
        Auto.findByIdAndUpdate(autoId, req.body, { new: true }, function (err, autoUpdate) {
            if (err) {
                console.log(err)
                res.status(500).send({
                    message: 'Error interno del sistema',error:err
                });
            } else {
                if (!autoUpdate) {
                    res.status(404).send({ message: 'No Exites el auto con el id proporcionado' });
                } else {
                    res.status(200).send({ data: updateAuto })
                }
                //res.status(200).send({ data: autoUpdate })
            }
        });
    }
}
function updateAutoColores(req,params){
    res.status(200).send({message:'entre a updateautoColores'});
}
function deleteAuto(req, res) {
    //obtenemos el id quye llega como parametro
    var autoId = req.params.id;
    //verificamos si el parametro enviado es un objectId
    var idValido = mongoose.Types.ObjectId.isValid(autoId);
    if (!idValido) {
        // si no es  valido mostramos es un mensaje de id invalido
        res.status(409).send({ message: 'id invalido.' });
    } else {

        Auto.findByIdAndRemove(autoId, function (err, auto) {
            if (err) {
                console.log(err)
                res.status(500).send({ message: 'error al obtener el auto.', error: err });
            } else {
                if (!auto) {
                    res.status(404).send({ message: 'Auto no Found' });
                } else {
                    res.status(200).send({ data: updateAuto, message: 'Auto eliminado correctamente' })
                }
            }
        })
    }
}
//function deleteAuto(req, res){
//obtenemos el id que llega como parametro
//  var autoId
//}
module.exports = {
    prueba,
    getAuto,
    getAutos,
    saveAuto,
    updateAuto,
    deleteAuto

}*/