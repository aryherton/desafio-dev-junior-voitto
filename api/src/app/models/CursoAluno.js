import { Model, DataTypes } from 'sequelize';

class CursoAluno extends Model {
  static init(sequelize) {
    super.init({
      id_pessoa: DataTypes.INTEGER,
      id_curso: DataTypes.INTEGER
    }, {
      sequelize,
      timestamps: false,
      tableName: 'curso_pessoa'
    });

    this.associate = (models) => {
      models.Aluno.belongsToMany(models.Curso, {
        foreignKey: 'id_pessoa',
        as: 'curso',
        through: CursoAluno,
        otherKey: 'id_curso'
      });

      models.Curso.belongsToMany(models.Aluno, {
        foreignKey: 'id_curso',
        as: 'aluno',
        through: CursoAluno,
        otherKey: 'id_pessoa'
      });
    }

    return this;
  }
}

export default CursoAluno;
