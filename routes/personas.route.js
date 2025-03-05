const express = require('express');

const personaController = require('../controllers/personaController');

// Rutas para Personas
router.post('/personas', personaController.crearPersona);
router.get('/personas', personaController.obtenerPersonas);
router.get('/personas/:id', personaController.obtenerPersonaPorId);
router.put('/personas/:id', personaController.actualizarPersona);
router.delete('/personas/:id', personaController.eliminarPersona);

module.exports = router;
