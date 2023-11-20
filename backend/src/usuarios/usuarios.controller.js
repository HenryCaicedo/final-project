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

    if (!user||!user.activo) {
      return res.status(404).json({ message: 'User not found.' });
    }
    const passwordMatch = await bcrypt.compare(contrasena, user.contrasena);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password.' });
    }
    const id=user._id;

    const token = jwt.sign({ userId: user._id }, process.env.AUTH_TOKEN);

    return res.status(200).json({ token, id });
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
}

export async function loggedUsuario(req, res) {
  try {
    return res.status(200);
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
}

//Read

export async function readUsuario(req, res) {
  const usuarioId = req.params.id; 

  try {
    
    const usuario = await userModel.findById(usuarioId);

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    return res.json({ usuario });
  } catch (error) {
    console.error('Error al leer el usuario:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}
export async function progresUsuario(req, res) {
  
  const usuarioId = req.params.id; 

  try {
    
    const usuario = await userModel.findById(usuarioId).populate('progreso');

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    const ultimoMapa = usuario.progreso.length > 0 ? usuario.progreso[usuario.progreso.length - 1] : null;

    if (ultimoMapa) {
      
      return res.json({ ultimoMapa });
    } else {
    
      return res.json({ message: 'El usuario no tiene mapas en su progreso' });
    }
  } catch (error) {
    console.error('Error al leer el usuario:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

//Update
export async function updateUsuario(req, res) {
  
  const usuarioId = req.params.id; 
  const nuevoMapaId = req.body.nuevoMapaId; 

  try {
    
    const usuarioActualizado = await userModel.findByIdAndUpdate(
      usuarioId,
      { $push: { progreso: nuevoMapaId } },
      { new: true }
    );

    if (!usuarioActualizado) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    return res.json({ usuarioActualizado });
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

//Delete
export async function deleteUsuario(req, res) {
  const usuarioId = req.params.id; 

  try {
    
    const usuarioEliminado = await userModel.findByIdAndUpdate(
      usuarioId,
      { activo: false },
      { new: true }
    );

    if (!usuarioEliminado) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    return res.json({ message: 'Usuario eliminado con soft delete', usuarioEliminado });
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}
