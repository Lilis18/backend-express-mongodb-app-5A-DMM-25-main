

const express = require('express');
const router = express.Router();
const articuloController = require('../controllers/articuloController');
const ubicacionController = require('../controllers/ubicacionController');
const asignacionController = require('../controllers/asignacionController');

// Rutas para Artículos
router.post('/articulos', articuloController.crearArticulo);
router.get('/articulos', articuloController.obtenerArticulos);
router.put('/articulos/:id', articuloController.actualizarArticulo);
router.delete('/articulos/:id', articuloController.eliminarArticulo);

module.exports = router;