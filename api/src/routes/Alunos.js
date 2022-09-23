import { Router } from 'express';

import AlunosController from '../app/controllers/AlunoController';
import ValidAluno from '../middlewares/ValidAluno';
import ValidUser from '../middlewares/ValidUser';

const routes = new Router();

routes
  .get('/:id', ValidUser.validToken, AlunosController.findByIdAluno)
  .get('/', ValidUser.validToken, AlunosController.findAll)
  .post('/', ValidUser.validUserAdmin, ValidAluno.validRegistAluno, AlunosController.create)
  .delete('/:id', ValidUser.validUserAdmin, AlunosController.delete)
  .put('/', ValidUser.validUserAdmin, ValidAluno.validUpdateAluno, AlunosController.update);

export default routes;
