import { Router } from 'express';

import AlunosController from '../app/controllers/AlunoController';
import ValidAluno from '../middlewares/ValidAluno';

const routes = new Router();

routes
  .get('/', AlunosController.findAll)
  .post('/', ValidAluno.validRegistAluno, AlunosController.create)
  .delete('/:id', AlunosController.delete)
  .put('/', ValidAluno.validUpdateAluno, AlunosController.update);

export default routes;
