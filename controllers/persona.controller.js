const Persona = require('../models/Persona');

exports.crearPersona = async (req, res) => {
    try {
        const nuevaPersona = new Persona(req.body);
        await nuevaPersona.save();
        res.status(201).json(nuevaPersona);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.obtenerPersonas = async (req, res) => {
    try {
        const personas = await Persona.find();
        res.json(personas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obtenerPersonaPorId = async (req, res) => {
    try {
        const persona = await Persona.findById(req.params.id);
        if (!persona) {
            return res.status(404).json({ mensaje: "Persona no encontrada" });
        }
        res.json(persona);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.actualizarPersona = async (req, res) => {
    try {
        const personaActualizada = await Persona.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!personaActualizada) {
            return res.status(404).json({ mensaje: "Persona no encontrada" });
        }
        res.json(personaActualizada);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.eliminarPersona = async (req, res) => {
    try {
        await Persona.findByIdAndDelete(req.params.id);
        res.json({ mensaje: "Persona eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

