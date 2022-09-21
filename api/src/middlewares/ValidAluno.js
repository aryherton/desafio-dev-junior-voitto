import Joi from '../app/services/help/Joi';

export default class ValidAluno {
  static async validUpdateAluno(req, res, next) {
    const erro = Joi.validUpdateAluno(req.body);
    
    if (erro) {
      return res.status(400).json(erro.message);
    }
    
    next();
  }
  
  static async validRegistAluno(req, res, next) {
    const erro = Joi.validRegistAluno(req.body);
    
    if (erro) {
      console.log(erro.message);
      return res.status(400).json(erro.message);
    }
    
    next();
  }
}