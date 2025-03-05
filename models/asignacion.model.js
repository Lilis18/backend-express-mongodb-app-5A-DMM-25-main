
const mongoose = require('mongoose');
const AsignacionSchema = new mongoose.Schema({
    persona: { type: mongoose.Schema.Types.ObjectId, ref: 'Persona', required: true },
    articulo: { type: mongoose.Schema.Types.ObjectId, ref: 'Articulo', required: true },
    observacion: { type: String },
    estado: { type: String, enum: ['Activa', 'Inactiva'], required: true },
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date },
    usuarioAsignador: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }
});

module.exports = mongoose.model('Asignacion', AsignacionSchema);