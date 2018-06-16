'use strinct'

//importamos express puta aprende muy bien esta madre 

var express = require('express')
//importamos el controllador
var autoController = require('../controllers/country')

//intacioamos objeto router

var api = express.Router();
//nueva variable de rutaas
//var curriencies = express.Router();
//DEFINIMOS EL RECURSP GET COPN URL: /apí/autp/:id?,recibe
//un parametro y se procesa en el metodo de prueba del controllers
//auto controller el signo de interrogacion es que puede ser requeridio o no

api.get('/country/:id?', autoController.getCountry);
api.get('/countries/', autoController.getCountries);
api.post('/country', autoController.saveCountry);
api.put('/country/:id?', autoController.updateCountry);
api.delete('/country/:id?', autoController.deleteCountry);


/*api.get('/country/:id?',countryController.getCountry);
api.get('/countries/',countryController.getCountries);
api.post('/country',countryController.saveCountry);
api.put('/country/:id?',countryController.updateCountry);
api.delete('/country/:id?',countryController.deleteCountry)*/


//definimos el otro vonche de parametros


// para utilizqarlo en otros ficjheros importamos
module.exports = api;