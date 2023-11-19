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
  const mapaId = req.params.id;

  try {
    const mapa = await mapaModel.findById(mapaId);

    if (!mapa) {
      return res.status(404).json({ message: 'Mapa no encontrado' });
    }

    return res.status(200).json({mapa});
  } catch (error) {
    console.error('Error al leer el mapa:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export async function readMapaLvl(req, res) {
  const { nivel, unidad } = req.body;

  try {
    const mapa = await mapaModel.findOne({ nivel, unidad });

    if (!mapa) {
      return res.status(404).json({ message: 'Mapa no encontrado para el nivel y unidad especificados' });
    }

    return res.json({ mapaId: mapa._id });
  } catch (error) {
    console.error('Error al leer el mapa:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

//Update
export async function updateMapa(req, res) {
  return res.json({ messge: 'actualizar Usuario' });
}

//Delete
export async function deleteMapa(req, res) {
  return res.json({ messge: 'eliminar Usuario' });
}