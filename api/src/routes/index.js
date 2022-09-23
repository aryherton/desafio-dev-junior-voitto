import { Router } from 'express';

import Alunos from './Alunos';
import Cursos from './Cursos';
import Users from './Users';
import CursoAluno from './CursoAluno';

const routes = new Router();

routes
  .use('/alunos', Alunos)
  .use('/cursos', Cursos)
  .use('/users', Users)
  .use('/cursoaluno', CursoAluno);

export default routes;
