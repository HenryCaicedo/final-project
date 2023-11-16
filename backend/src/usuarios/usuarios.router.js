import { Router } from 'express';
import { createUsuario, deleteUsuario,readUsuario, updateUsuario, loginUsuario, progresUsuario } from './usuarios.controller';

const routerUsuarios = Router();

// Create
routerUsuarios.post('/signup', createUsuario);
// Login
routerUsuarios.post('/login', loginUsuario)
//Read 
routerUsuarios.get('/:id', readUsuario);
routerUsuarios.get('/progreso/:id', progresUsuario);
//Update
routerUsuarios.patch('/:id', updateUsuario);
//Delete
routerUsuarios.delete('/:id', deleteUsuario);

export default routerUsuarios;
