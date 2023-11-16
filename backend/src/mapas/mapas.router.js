import { Router } from 'express';
import { createMapa, readMapa, updateMapa, deleteMapa} from './mapas.controller';

const routerMapas = Router();

// Create
routerMapas.post('/', createMapa);
//Read 
routerMapas.get('/:id', readMapa);
//Update
routerMapas.patch('/:id', updateMapa);
//Delete
routerMapas.delete('/:id', deleteMapa);

export default routerMapas;
