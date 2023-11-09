const mongoose = require("mongoose");
const bcrypt = require('bcrypt'); 
const userSchema = new mongoose.Schema({
  nombre: String,
  correoElectronico: {
    type: String,
    required: true
  },
  contraseña: {
    type: String,
    required: true
  },
  rol: {type:String,
  default: "Estudiante"},
  habilitado: {
    type: Boolean,
    default: true  // Valor por defecto es habilitado (true)
  }  // Campo para habilitar/deshabilitar al usuario
});
// Encriptando contraseñas con bcrypt
const userModel = mongoose.model('usuarios', userSchema);
userSchema.pre('save', async function (next) {
  const usuario = this;
  if (!usuario.isModified('contraseña')) return next();

  const saltRounds = 10;
  const hash = await bcrypt.hash(usuario.contraseña, saltRounds);
  usuario.contraseña = hash;
  next();
});
export default userModel;
