const mongoose = require('mongoose');

const ArticuloSchema = new mongoose.Schema({
    tipo: { type: String, enum: ['Mobiliario de oficina', 'Equipo de cómputo', 'Otros'], required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String },
    estado: { type: String, enum: ['Sin determinar', 'Malo', 'Regular', 'Bueno', 'Excelente'], default: 'Sin determinar' },
    ubicacion: { type: mongoose.Schema.Types.ObjectId, ref: 'Ubicacion', required: true },
    fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Articulo', ArticuloSchema);