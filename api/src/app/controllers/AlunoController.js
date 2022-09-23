import AlunoService from '../services/AlunoServices';

class AlunoController {
  async findAll(req, res) {
    try {
      const alunos = await AlunoService.findAll()
      res.status(200).json(alunos);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        error: 'Erro ao listar alunos'
      });
    }
  }

  async findByIdAluno(req, res) {
    try {
      const alunos = await AlunoService.findByIdAluno(req.params);
      return res.status(200).json(alunos);
    } catch (error) {}
  }

  async create(req, res) {
    try {
      const aluno = await AlunoService.created(req.body);
      return res.status(200).json(aluno);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'Erro ao cadastrar aluno' });
    }
  }

  async update(req, res) {
    try {
      const aluno = await AlunoService.update(req.body);
      return res.status(200).json(aluno);
    }
    catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'Erro ao atualizar aluno' });
    }
  }

  async delete(req, res) {
    try {
      await AlunoService.delete(req.params);
      return res.status(204).end();
    }
    catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'Erro ao deletar aluno' });
    }
  }
}

export default new AlunoController();
