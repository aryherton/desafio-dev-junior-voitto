import CursoAluno from '../../models/CursoAluno';

class AtribuirCursoAlunoService {
  async execute(arrObjIds) {
    await Promise
      .all(arrObjIds
        .map(async (objIds) => await CursoAluno.create(objIds)));
  }

  async update(arrObjIds) {
    await Promise
      .all(arrObjIds
        .map(async (objIds) => await CursoAluno
          .update(objIds, { where: { id_pessoa: objIds.id_pessoa } })));
  }
}

export default new AtribuirCursoAlunoService();
