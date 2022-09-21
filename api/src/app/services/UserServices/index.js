import User from '../../models/User';

class UserServices {
  static async created(obj_user) {
    const user = await User
      .create(obj_user);
    return user;
  }

  static async findAll() {
    const user = await User.findAll();
    return user;
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