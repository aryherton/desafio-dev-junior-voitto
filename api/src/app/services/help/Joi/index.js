import joi from 'joi';

export default class Joi {
  static validLogin(obj_user) {
    const schema = joi.object({
      email: joi.string().email().required(),
      senha: joi.string().min(8).required()
    }).validate(obj_user).error;
    
    return schema;
  }

  static validRegister(obj_user) {
    const schema = joi.object({
      nome: joi.string().required(),
      email: joi.string().email().required(),
      senha: joi.string().min(8).required(),
    }).validate(obj_user).error;
    
    return schema;
  }

  static validRegistAluno(obj_aluno) {
    const schema = joi.object({
      nome: joi.string().required(),
      email: joi.string().email().required(),
      cep: joi.string().required(),
      cidade: joi.string().required(),
      estado: joi.string().required(),
    }).validate(obj_aluno).error;
    
    return schema;
  }

  static validUpdateAluno(obj_aluno) {
    const schema = joi.object({
      id: joi.number().required(),
      nome: joi.string().required(),
      email: joi.string().email().required(),
      cep: joi.string().required(),
      cidade: joi.string().required(),
      estado: joi.string().required(),
    }).validate(obj_aluno).error;
    
    return schema;
  }
}