import User from '../../models/User';
import Token from '../help/jwt';
import bcrypt from 'bcryptjs';

class UserServices {
  static async created(obj_user) {
    const { senha } = obj_user;
    const hash = await bcrypt.hash(senha, 10);
    const user = await User
      .create({ ...obj_user, senha: hash });
    const token = Token.generateToken({ email: user.email, user: user.senha });

    return {
      id: user.id,
      nome: user.nome,
      email: user.email,
      admin: user.admin,
      token
    };
  }

  static async findAll() {
    const users = await User
      .findAll({ attributes: { exclude: ['senha'] } });
    
    return users;
  }

  static async findUserByEmail(email) {
    const user = await User.findOne({ where: { email } });
    return user;
  }

  static async validUser(email, pswd) {
    const user = await this.findUserByEmail(email);
    
    if (user) {
      const checkPswd = await bcrypt.compare(pswd, user.senha);
      console.log(checkPswd);

      if (checkPswd) {
        const token = Token.generateToken({ email: user.email, user: user.senha });
        
        return {
          id: user.id,
          nome: user.nome,
          email: user.email,
          admin: user.admin,
          token
        };
      }
    }
  }

  static async update(user) {
    const { id } = user;
    await User.update(user, {
      where: {
        id
      }
    });
    return user;
  }

  static async delete({ id }) {
    await User.destroy({ where: { id } });
  }
}

export default UserServices;