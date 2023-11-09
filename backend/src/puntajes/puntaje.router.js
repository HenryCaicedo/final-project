import { Router } from 'express';
import { readPuntaje } from './puntaje.controller';

const routerPuntajes = Router();

//Read
routerPuntajes.get('/', readPuntaje);

export default routerPuntajes;
