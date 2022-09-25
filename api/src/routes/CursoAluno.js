import { Router } from 'express';

import CursoAlunoController from '../app/controllers/CursoAlunoController';
import ValidUser from '../middlewares/ValidUser';

const routes = new Router();

routes
  .post('/', ValidUser.validUserAdmin, CursoAlunoController.create)
  .put('/', ValidUser.validUserAdmin, CursoAlunoController.updateCursoAluno);

export default routes;
