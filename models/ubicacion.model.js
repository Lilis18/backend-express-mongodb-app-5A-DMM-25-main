const mongoose = require('mongoose');

const UbicacionSchema = new mongoose.Schema({
    edificio: { type: String, required: true },
    area: { type: String, required: true },
    departamento: { type: String, required: true },
    direccion: {
        calle: { type: String },
        numero: { type: String },
        ciudad: { type: String },
        estado: { type: String },
        codigoPostal: { type: String }
    },
    fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ubicacion', UbicacionSchema);