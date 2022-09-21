import UserService from '../services/UserServices';

class UserController {
  async findAll(_req, res) {
    try {
      const alunos = await UserService.findAll()
      res.status(200).json(alunos);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        error: 'Erro ao listar alunos'
      });
    }
  }
  
  async read(req, res) {
    // TODO
  }
  
  async create(req, res) {
    try {
      const aluno = await UserService.created(req.body);
      return res.status(200).json(aluno);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        error: 'Erro ao cadastrar aluno'
      });
    }
  }
  
  async update(req, res) {
    try {
      const aluno = await UserService.update(req.body);
      return res.status(200).json(aluno);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        error: 'Erro ao atualizar aluno'
      });
    }
  }
  
  async delete(req, res) {
    try {
      await UserService.delete(req.params);
      return res.status(204).end();
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        error: 'Erro ao deletar aluno'
      });
    }
  }
}

export default new UserController();
