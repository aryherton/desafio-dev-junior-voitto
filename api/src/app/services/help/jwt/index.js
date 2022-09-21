import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET = process.env.SECRET_KEY;

export default class Jwt {
  static generateToken(payload) {
    try {
      return JWT.sign(payload, SECRET, { expiresIn: '15d' });
    } catch (error) {
      console.log(error.message);
      throw new Error('Erro ao gerar token');
    }
  }
  
  static verifyToken(token) {
    return JWT.verify(token, SECRET);
  }
}