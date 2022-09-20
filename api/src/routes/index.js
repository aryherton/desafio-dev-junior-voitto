import { Router } from 'express';

import Alunos from './Alunos';
import Cursos from './Cursos';

const routes = new Router();

routes
  .use('/alunos', Alunos)
  .use('/cursos', Cursos);

export default routes;
