import CursoAluno from '../services/AtribuirCursoAlunoService';
import AlunoServices from '../services/AlunoServices';

class CursoAlunoController {
  async create(req, res) {
    try {
      await CursoAluno.execute(req.body);
      return res.status(200).end();
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        error: 'Erro ao cadastrar aluno'
      });
    }
  }

  async updateCursoAluno(req, res) {
    try {
      const arrUser = await AlunoServices.findByIdAluno(req.body[0].id_pessoa);
      
      if (arrUser[0].curso.length) {
        await CursoAluno.update(req.body);
        return res.status(200).end();
      }
      
      await CursoAluno.execute(req.body);
      return res.status(200).end();
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        error: 'Erro ao atualizar aluno'
      });
    }
  }
}

export default new CursoAlunoController();
