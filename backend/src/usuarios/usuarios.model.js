const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  nombre: {
    type:String,
    required:true
  },
  correoElectronico: {
    type: String,
    required: true,
    unique:true
  },
  contrasena: {
    type: String,
    required: true
  },
  progreso: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'mapas'
  }],
  activo: {
    type: Boolean,
    default: true  // Valor por defecto es habilitado (true)
  }  // Campo para habilitar/deshabilitar al usuario
});

const userModel = mongoose.model('usuarios', userSchema);
export default userModel;
