import CursoAluno from '../services/AtribuirCursoAlunoService';
import UserServices from '../services/UserServices';
import Jwt from '../services/help/jwt';

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
}

export default new CursoAlunoController();
