import CursoAluno from '../../models/CursoAluno';

class AtribuirCursoAlunoService {
  async execute(arrObjIds) {
    // await CursoAluno.create({
    //   id_pessoa,
    //   id_curso
    // });
    await Promise
      .all(arrObjIds
        .map(async (objIds) => await CursoAluno.create(objIds)));
  }
}

export default new AtribuirCursoAlunoService();
