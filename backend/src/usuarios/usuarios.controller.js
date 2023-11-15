import userModel from './usuarios.model';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Create
export async function createUsuario(req, res) {
  try {
    const contrasenaSinCifrar = req.body.contrasena;
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const contrasenaCifrada = await bcrypt.hash(contrasenaSinCifrar, salt);
    const document = await userModel.create({
      ...req.body,
      contrasena: contrasenaCifrada,
      active: true,
    });

    res.status(201).json({ mensaje: 'Usuario creado con éxito' });
  } catch (error) {
    if (error.code === 11000) {
      // Código 11000 indica duplicado en un campo único
      res.status(400).json({ error: 'El correo electrónico ya está registrado.' });
    } else {
      console.error('Error al crear el usuario:', error);
      res.status(500).json({ error: 'Error al crear el usuario' });
    }
  }
}

export async function loginUsuario(req, res) {
  try {
    const { correoElectronico, contrasena } = req.body;
    if (!correoElectronico || !contrasena) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const user = await userModel.findOne({ correoElectronico });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    const passwordMatch = await bcrypt.compare(contrasena, user.contrasena);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.AUTH_TOKEN);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
}

//Read
export async function readUsuario(req, res) {
  return res.json({ messge: 'Leer Usuario' });
}

//Update
export async function updateUsuario(req, res) {
  return res.json({ messge: 'actualizar Usuario' });
}

//Delete
export async function deleteUsuario(req, res) {
  return res.json({ messge: 'eliminar Usuario' });
}
