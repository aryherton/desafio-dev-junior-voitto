import { Router } from 'express';

import CursoAlunoController from '../app/controllers/CursoAlunoController';

const routes = new Router();

routes
  .post('/', CursoAlunoController.create);

export default routes;
