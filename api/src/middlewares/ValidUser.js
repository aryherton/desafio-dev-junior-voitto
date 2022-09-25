import Joi from '../app/services/help/Joi';
import Jwt from '../app/services/help/jwt';

import UserService from '../app/services/UserServices';

export default class ValidUser {
  static async validUserLogin(req, res, next) {
    const erro = Joi.validLogin(req.body);
    
    if (erro) {
      return res.status(400).json(erro.message);
    }
    next();
  }

  static async validUserRegister(req, res, next) {
    const erro = Joi.validRegister(req.body);
    
    if (erro) {
      return res.status(400).json(erro.message);
    }
    
    next();
  }

  static async validToken(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: 'Token não enviado' });
    }

    const checkToken = Jwt.verifyToken(authorization);
    if (!checkToken) {
      return res.status(401).json({ error: 'Token inválido' });
    }
    
    next();
  }

  static async validUserAdmin(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: 'Token não enviado' });
    }
    const checkToken = Jwt.verifyToken(authorization);
    
    if (!checkToken) {
      return res.status(401).json({ error: 'Token inválido' });
    }
    
    const user = await UserService.findUserByEmail(checkToken.email);
    
    if (!user.admin) {
      return res.status(401).json({ error: 'Usuário não autorizado' });
    }

    next();
  }
}