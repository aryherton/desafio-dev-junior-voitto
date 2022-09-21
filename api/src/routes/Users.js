import { Router } from 'express';

import UserController from '../app/controllers/UserController';
import ValidUser from '../middlewares/ValidUser';

const routes = new Router();

routes
  .get('/', UserController.findAll)
  .post('/', ValidUser.validUserRegister, UserController.create)
  .post('/login', ValidUser.validUserLogin, UserController.login)
  .delete('/:id', UserController.delete)
  .put('/', UserController.update);

export default routes;
