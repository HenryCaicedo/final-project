import { Router } from 'express';
import { createUsuario, deleteUsuario, readUsuario, updateUsuario } from './usuarios.controller';

const routerUsuarios = Router();

//Create
routerUsuarios.post('/signup', createUsuario);
//Read 
routerUsuarios.get('/', readUsuario);
//Update
routerUsuarios.patch('/', updateUsuario);
//Delete
routerUsuarios.delete('/', deleteUsuario);

export default routerUsuarios;
