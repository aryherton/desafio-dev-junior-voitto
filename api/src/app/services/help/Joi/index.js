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
      admin: joi.boolean().required()
    }).validate(obj_user).error;
    
    return schema;
  }
}