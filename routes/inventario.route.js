const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventarioController');

// Rutas para Inventario
router.post('/inventarios', inventarioController.crearInventario);
router.get('/inventarios', inventarioController.obtenerInventarios);
router.get('/inventarios/:id', inventarioController.obtenerInventarioPorId);
router.put('/inventarios/:id', inventarioController.actualizarInventario);
router.delete('/inventarios/:id', inventarioController.eliminarInventario);

module.exports = router;