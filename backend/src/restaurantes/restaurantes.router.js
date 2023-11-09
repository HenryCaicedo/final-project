import { Router } from 'express';
import { readRestaurante } from './restaurantes.controller';

const routerRestaurantes = Router();

//Read
routerRestaurantes.get('/', readRestaurante);

export default routerRestaurantes;
