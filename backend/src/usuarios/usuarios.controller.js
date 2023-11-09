import userModel from './usuarios.model';

//Create
export async function createUsuario(req, res) {
  try {
    const document = await userModel.create(req.body);
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.messge);
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
