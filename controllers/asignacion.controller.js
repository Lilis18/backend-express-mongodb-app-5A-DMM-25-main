
const Asignacion = require('../models/asignacion');

exports.crearAsignacion = async (req, res) => {
    try {
        const nuevaAsignacion = new Asignacion(req.body);
        await nuevaAsignacion.save();
        res.status(201).json(nuevaAsignacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.obtenerAsignaciones = async (req, res) => {
    try {
        const asignaciones = await Asignacion.find().populate('persona').populate('articulo');
        res.json(asignaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};