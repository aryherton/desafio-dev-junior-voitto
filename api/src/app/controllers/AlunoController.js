import AlunoService from '../services/AlunoServices';
import UserServices from '../services/UserServices';
import Jwt from '../services/help/jwt';

class AlunoController {
  async findAll(req, res) {
    const { authorization } = req.headers;
    
    if (!authorization) {
      return res.status(401)
        .json({
          error: 'Token não enviado'
        });
    }
    
    const checkToken = Jwt.verifyToken(authorization);
    
    if (!checkToken) {
      return res.status(401)
        .json({
          error: 'Token inválido'
        });
    }

    const { admin } = await UserServices.findUserByEmail(checkToken.email);

    if (!admin) {
      return res.status(401)
        .json({
          error: 'Usuário não autorizado'
        });
    }
    
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
    const { authorization } = req.headers;
    const { id } = req.params;

    if (!authorization) {
      return res.status(401)
        .json({
          error: 'Token não enviado'
        });
    }

    const checkToken = Jwt.verifyToken(authorization);

    if (!checkToken) {
      return res.status(401)
        .json({
          error: 'Token inválido'
        });
    }

    try {
      const alunos = await AlunoService.findByIdAluno(id);
      return res.status(200).json(alunos);
    } catch (error) {}
  }

  async create(req, res) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401)
        .json({
          error: 'Token não enviado'
        });
    }

    const checkToken = Jwt.verifyToken(authorization);

    if (!checkToken) {
      return res.status(401)
        .json({
          error: 'Token inválido'
        });
    }

    const { admin } = await UserServices.findUserByEmail(checkToken.email);

    if (!admin) {
      return res.status(401)
        .json({
          error: 'Usuário não autorizado'
        });
    }

    try {
      const aluno = await AlunoService.created(req.body);
      return res.status(200).json(aluno);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'Erro ao cadastrar aluno' });
    }
  }

  async update(req, res) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401)
        .json({
          error: 'Token não enviado'
        });
    }

    const checkToken = Jwt.verifyToken(authorization);

    if (!checkToken) {
      return res.status(401)
        .json({
          error: 'Token inválido'
        });
    }
    
    const { admin } = await UserServices.findUserByEmail(checkToken.email);

    if (!admin) {
      return res.status(401)
        .json({
          error: 'Usuário não autorizado'
        });
    }

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
    const {
      authorization
    } = req.headers;

    if (!authorization) {
      return res.status(401)
        .json({
          error: 'Token não enviado'
        });
    }

    const checkToken = Jwt.verifyToken(authorization);

    if (!checkToken) {
      return res.status(401)
        .json({
          error: 'Token inválido'
        });
    }

    const {
      admin
    } = await UserServices.findUserByEmail(checkToken.email);

    if (!admin) {
      return res.status(401)
        .json({
          error: 'Usuário não autorizado'
        });
    }
    
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
