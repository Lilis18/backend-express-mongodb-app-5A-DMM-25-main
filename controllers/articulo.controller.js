const Articulo = require('../models/articulo');

exports.crearArticulo = async (req, res) => {
    try {
        const nuevoArticulo = new Articulo(req.body);
        await nuevoArticulo.save();
        res.status(201).json(nuevoArticulo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.obtenerArticulos = async (req, res) => {
    try {
        const articulos = await Articulo.find().populate('ubicacion');
        res.json(articulos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.actualizarArticulo = async (req, res) => {
    try {
        const articuloActualizado = await Articulo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(articuloActualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.eliminarArticulo = async (req, res) => {
    try {
        await Articulo.findByIdAndDelete(req.params.id);
        res.json({ mensaje: "Artículo eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
