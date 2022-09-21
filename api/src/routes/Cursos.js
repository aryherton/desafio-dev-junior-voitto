import { Router } from 'express';

import CursosController from '../app/controllers/CursoController';

const routes = new Router();

routes
  .get('/:id', CursosController.findByIdCurso)
  .get('/', CursosController.findAll)
  .post('/', CursosController.create)
  .delete('/:id', CursosController.delete)
  .put('/', CursosController.update);

export default routes;
