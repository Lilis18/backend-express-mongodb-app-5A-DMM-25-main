const express = require('express');

router.post('/ubicaciones', ubicacionController.crearUbicacion);
router.get('/ubicaciones', ubicacionController.obtenerUbicaciones);

// Rutas para Asignaciones
router.post('/asignaciones', asignacionController.crearAsignacion);
router.get('/asignaciones', asignacionController.obtenerAsignaciones);

module.exports = router;
