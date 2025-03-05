
const Ubicacion = require('../models/ubicacion');

exports.crearUbicacion = async (req, res) => {
    try {
        const nuevaUbicacion = new Ubicacion(req.body);
        await nuevaUbicacion.save();
        res.status(201).json(nuevaUbicacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.obtenerUbicaciones = async (req, res) => {
    try {
        const ubicaciones = await Ubicacion.find();
        res.json(ubicaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
