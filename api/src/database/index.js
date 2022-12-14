import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Aluno from '../app/models/Aluno';
import Curso from '../app/models/Curso';
import CursoAluno from '../app/models/CursoAluno';
import User from '../app/models/User';

const models = [Aluno, Curso, CursoAluno, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
