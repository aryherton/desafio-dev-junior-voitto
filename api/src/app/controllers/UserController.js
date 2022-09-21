import UserService from '../services/UserServices';
import Jwt from '../services/help/jwt';

class UserController {  
  async create(req, res) {
    try {
      const user = await UserService.created(req.body);
      return res.status(200).json(user);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        error: 'Erro ao cadastrar user'
      });
    }
  }

  async login(req, res) {
    try {
      const { email, senha } = req.body;
      const token = await UserService.validUser(email, senha);
      return res.status(200).json(token);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        error: 'Erro ao logar user'
      });
    }
  }
  
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
    
    try {
      const users = await UserService.findAll()

      return res.status(200).json(users);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        error: 'Erro ao listar users'
      });
    }
  }

  async update(req, res) {
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
    
    try {
      const user = await UserService.update(req.body);
      return res.status(200).json(user);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        error: 'Erro ao atualizar user'
      });
    }
  }
  
  async delete(req, res) {
    const { authorization } = req.headers;
    
    if (!authorization) {
      return res.status(401)
        .json({ error: 'Token não enviado' });
    }
    
    const checkToken = Jwt.verifyToken(authorization);
    
     if (!checkToken) {
      return res.status(401)
        .json({ error: 'Token inválido' });
     }
    
    try {
      await UserService.delete(req.params);
      return res.status(204).end();
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        error: 'Erro ao deletar user'
      });
    }
  }
}

export default new UserController();
