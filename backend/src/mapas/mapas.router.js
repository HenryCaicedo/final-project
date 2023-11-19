import { Router } from 'express';
import { createMapa, readMapa, updateMapa, deleteMapa, readMapaLvl} from './mapas.controller';

const routerMapas = Router();

// Create
routerMapas.post('/create/', createMapa);
//Read 
routerMapas.get('/:id', readMapa);
routerMapas.post('/read/', readMapaLvl);
//Update
routerMapas.patch('/:id', updateMapa);
//Delete
routerMapas.delete('/:id', deleteMapa);

export default routerMapas;
