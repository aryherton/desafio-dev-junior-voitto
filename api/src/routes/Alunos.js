import { Router } from 'express';

import AlunosController from '../app/controllers/AlunoController';

const routes = new Router();

routes
  .get('/', AlunosController.findAll)
  .post('/', AlunosController.create)
  .delete('/:id', AlunosController.delete)
  .put('/', AlunosController.update);

export default routes;
