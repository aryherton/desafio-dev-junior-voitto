import CursoService from '../services/CursoServices';
import UserServices from '../services/UserServices';
import Jwt from '../services/help/jwt';

class CursoController {
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
      const cursos = await CursoService.findAll()
      res.status(200).json(cursos);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: 'Erro ao listar cursos'
      });
    }
  }
  
  async read(req, res) {
    // TODO
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
      const cursos = await CursoService.created(req.body);
      return res.status(200).json(cursos);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        error: 'Erro ao cadastrar cursos'
      });
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
      const cursos = await CursoService.update(req.body);
      return res.status(200).json(cursos);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        error: 'Erro ao atualizar cursos'
      });
    }
  }
  
  async delete(req, res) {
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
      await CursoService.delete(req.params);
      return res.status(204).end();
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        error: 'Erro ao deletar cursos'
      });
    }
  }
}

export default new CursoController();
