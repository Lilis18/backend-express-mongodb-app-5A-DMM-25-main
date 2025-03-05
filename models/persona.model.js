const mongoose = require('mongoose');


const PersonaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellidoPaterno: { type: String, required: true },
    apellidoMaterno: { type: String },
    puesto: { type: String },
    mediosContacto: [{
        tipo: { type: String, required: true },  // Email, Teléfono, etc.
        valor: { type: String, required: true }
    }],
    fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Persona', PersonaSchema);

