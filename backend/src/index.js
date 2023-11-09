import express from 'express';
import routerUsuarios from './usuarios/usuarios.router';
import routerRestaurantes from './restaurantes/restaurantes.router';
import mongoose from 'mongoose';
import cors from 'cors'; // Importa el módulo cors


const app = express();

app.use(cors());




app.use(express.json());
app.use('/', routerUsuarios);
app.use('/restaurantes', routerRestaurantes);


app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is running on port 8080');
  }
});


mongoose
  .connect('mongodb+srv://backend.jxjicy9.mongodb.net/', {
    dbName: 'BackendDB',
    user: 'test',
    pass: 'test',
  })
  .then(() => console.log('base de datos conectada'))
  .catch((error) => console.log(error));
