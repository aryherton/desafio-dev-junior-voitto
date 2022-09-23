import Aluno from '../../models/Aluno';
import Curso from '../../models/Curso';

class AlunoServices {
  static async created(obj_aluno) {
    const aluno = await Aluno
      .create(obj_aluno);
    return aluno;
  }

  static async findAll() {
    const alunos = await Aluno.findAll({
      include: [
        { model: Curso, as: 'curso', attributes: ['id', 'nome'] }
      ]
    });
    return alunos;
  }

  static async findByIdAluno(id) {
    const cursos = await Aluno.findAll({
      where: {
        id
      },
      include: [
        { model: Curso, as: 'curso', attributes: ['id', 'nome'] }
      ]
    });

    return cursos;
  }

  static async findAlunoAndAllCurso() {
    const alunos = await Aluno.findAll({
      include: [
        {
          model: Curso, as: 'curso', attributes: ['id', 'nome'],
        },
      ]
    });

    return alunos;
  }

  static async update(aluno) {
    const { id } = aluno;
    await Aluno.update(aluno, { where: { id } });
    return aluno;
  }

  static async delete({ id }) {
    await Aluno.destroy({ where: { id } });
  }
}

export default AlunoServices;