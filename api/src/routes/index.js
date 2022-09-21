import { Router } from 'express';

import Alunos from './Alunos';
import Cursos from './Cursos';
import Users from './Users';

const routes = new Router();

routes
  .use('/alunos', Alunos)
  .use('/cursos', Cursos)
  .use('/users', Users);

export default routes;
