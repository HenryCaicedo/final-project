import userModel from './usuarios.model';

//Create
export async function createUsuario(req, res) {
          try {
            const { nombre, correoElectronico, contraseña, rol } = req.body;
        
            // Crea una instancia del modelo de usuario con los datos proporcionados
            const nuevoUsuario = new userModel({
              nombre,
              correoElectronico,
              contraseña,
              rol,
            });
            // Guarda el usuario en la base de datos
            await nuevoUsuario.save();
            res.status(201).json({ mensaje: 'Usuario creado con éxito' });
          } catch (error) {
            console.error('Error al crear el usuario:', error);
            res.status(500).json({ error: 'Error al crear el usuario' });
          }

        }
          
export async function loginUsuario (req, res) {
          const { correoElectronico, contraseña } = req.body;
        
          // Buscar el usuario en la base de datos
          const usuario = await userModel.findOne({ correoElectronico, contraseña });
        
          if (usuario) {
            // Usuario autenticado
            res.json({ mensaje: 'Inicio de sesión exitoso' });
          } else {
            // Usuario no encontrado o contraseña incorrecta
            res.status(401).json({ mensaje: 'Credenciales inválidas' });
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
