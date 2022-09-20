import Aluno from '../../models/Aluno';

class AlunoServices {
  static async created(obj_aluno) {
    const aluno = await Aluno
      .create(obj_aluno);
    return aluno;
  }

  static async findAll() {
    const alunos = await Aluno.findAll();
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