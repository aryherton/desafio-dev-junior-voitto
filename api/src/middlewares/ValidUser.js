import Joi from '../app/services/help/Joi';

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
}