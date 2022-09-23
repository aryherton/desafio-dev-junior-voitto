import { Router } from 'express';

import UserController from '../app/controllers/UserController';
import ValidUser from '../middlewares/ValidUser';

const routes = new Router();

routes
  .get('/', ValidUser.validUserAdmin, UserController.findAll)
  .get('/bytoken', ValidUser.validToken, UserController.findByToken)
  .post('/', ValidUser.validUserRegister, UserController.create)
  .post('/login', ValidUser.validUserLogin, UserController.login)
  .delete('/:id', ValidUser.validUserAdmin, UserController.delete)
  .put('/', ValidUser.validUserAdmin, UserController.update);

export default routes;
