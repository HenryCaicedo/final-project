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
  activo: {
    type: Boolean,
    default: true  // Valor por defecto es habilitado (true)
  }  // Campo para habilitar/deshabilitar al usuario
});
// Encriptando contraseñas con bcrypt
const userModel = mongoose.model('usuarios', userSchema);
export default userModel;
