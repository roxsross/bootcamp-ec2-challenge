const express = require('express');
const router = express.Router();
const consoleController = require('../controllers/console');

//Create, Read, Update, Delete (CRUD), Altas, Bajas, Cambios y Consultas (ABCC)

//Servicio para mostrar el formulario
router.get('/alta-consola', consoleController.getAltaConsola);
//Servicio para procesar los datos del formulario
router.post('/alta-consola', consoleController.postAltaConsola);
//Servicio para consultar todos los datos
router.get('/consulta-consola', consoleController.getConsultaConsola);

module.exports = router