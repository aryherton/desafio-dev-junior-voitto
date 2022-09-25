import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import routes from './routes/index';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from './docs/swagger.json';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.swagger();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  swagger() {
    this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
