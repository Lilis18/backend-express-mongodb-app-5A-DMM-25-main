
const express = require('express');


router.post('/asignaciones', asignacionController.crearAsignacion);
router.get('/asignaciones', asignacionController.obtenerAsignaciones);
router.get('/asignaciones/:id', asignacionController.obtenerAsignacionPorId);
router.put('/asignaciones/:id', asignacionController.actualizarAsignacion);
router.delete('/asignaciones/:id', asignacionController.eliminarAsignacion);

module.exports = router;
