const mongoose = require("mongoose");
const puntajeSchema = new mongoose.Schema({
    usuario: mongoose.Schema.Types.ObjectId,
     mapa: mongoose.Schema.Types.ObjectId,
     estrellas:{
        type: String,
        default: 0
     }
    });
    const puntajeModel = mongoose.model('puntajes', puntajeSchema);
export default puntajeModel;