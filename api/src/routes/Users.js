import { Router } from 'express';

import UserController from '../app/controllers/UserController';

const routes = new Router();

routes
  .get('/', UserController.findAll)
  .post('/', UserController.create)
  .delete('/:id', UserController.delete)
  .put('/', UserController.update);

export default routes;
