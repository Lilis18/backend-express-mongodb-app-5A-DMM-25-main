const mongoose = require('mongoose');


const InventarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    fechas: [{ type: Date, required: true }],
    responsable: { type: String, required: true },
    fechaRegistro: { type: Date, default: Date.now },
    estado: { type: String, enum: ['Activa', 'Inactiva'], required: true }
});

module.exports = mongoose.model('Inventario', InventarioSchema);