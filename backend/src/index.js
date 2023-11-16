import routerUsuarios from './usuarios/usuarios.router';
import routerMapas from './mapas/mapas.router';
import { config } from 'dotenv';
config();
const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/', routerUsuarios);
app.use('/mapa', routerMapas);
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});



mongoose
  .connect('mongodb+srv://atlascarritos:9Ufs7epsYUpv9uEC@cluster0.7cjmfka.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('base de datos conectada'))
  .catch((error) => console.log(error));
  const db = mongoose.connection;