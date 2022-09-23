import UserService from '../services/UserServices';
import Jwt from '../services/help/jwt';

class UserController {  
  async create(req, res) {
    try {
      const { email } = req.body;
      const checkUser = await UserService.findUserByEmail(email);
      
      if (checkUser) {
        return res.status(400).json({ error: 'Usuário já cadastrado' });
      }

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

  async findByToken(req, res) {
    try {
      const { authorization } = req.headers;
      const { email } = Jwt.verifyToken(authorization);
      const user = await UserService.findUserByEmail(email);

      return res.status(200).json({
        id: user.id,
        nome: user.nome,
        email: user.email,
        admin: user.admin,
        token: authorization
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        error: 'Erro ao buscar user'
      });
    }
  }

  async update(req, res) {
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
