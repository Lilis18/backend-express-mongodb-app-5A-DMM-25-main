const Inventario = require('../models/Inventario');

exports.crearInventario = async (req, res) => {
    try {
        const nuevoInventario = new Inventario(req.body);
        await nuevoInventario.save();
        res.status(201).json(nuevoInventario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.obtenerInventarios = async (req, res) => {
    try {
        const inventarios = await Inventario.find();
        res.json(inventarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obtenerInventarioPorId = async (req, res) => {
    try {
        const inventario = await Inventario.findById(req.params.id);
        if (!inventario) {
            return res.status(404).json({ mensaje: "Inventario no encontrado" });
        }
        res.json(inventario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.actualizarInventario = async (req, res) => {
    try {
        const inventarioActualizado = await Inventario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!inventarioActualizado) {
            return res.status(404).json({ mensaje: "Inventario no encontrado" });
        }
        res.json(inventarioActualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.eliminarInventario = async (req, res) => {
    try {
        await Inventario.findByIdAndDelete(req.params.id);
        res.json({ mensaje: "Inventario eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

