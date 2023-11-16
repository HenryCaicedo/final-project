import mapaModel from './mapas.model';

//Create
export async function createMapa(req, res) {
  try {
    const document = await mapaModel.create({
        ...req.body
      });

    res.status(201).json({ mensaje: 'Mapa creado con éxito' });
  } catch (error) {
      console.error('Error al crear el Mapa:', error);
     
    }
}


//Read
export async function readMapa(req, res) {
  return res.json({ messge: 'Leer Usuario' });
}

//Update
export async function updateMapa(req, res) {
  return res.json({ messge: 'actualizar Usuario' });
}

//Delete
export async function deleteMapa(req, res) {
  return res.json({ messge: 'eliminar Usuario' });
}