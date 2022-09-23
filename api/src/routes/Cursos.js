import { Router } from 'express';

import CursosController from '../app/controllers/CursoController';
import ValidUser from '../middlewares/ValidUser';

const routes = new Router();

routes
  .get('/:id', ValidUser.validToken, CursosController.findByIdCurso)
  .get('/', ValidUser.validToken, CursosController.findAll)
  .post('/', ValidUser.validUserAdmin, CursosController.create)
  .delete('/:id', ValidUser.validUserAdmin, CursosController.delete)
  .put('/', ValidUser.validUserAdmin, CursosController.update);

export default routes;
