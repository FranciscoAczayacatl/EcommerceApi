const Users = require('../models/users');
const Cart = require('../models/cart');

class UserServices {
  static async getUserAndCardId(id){
    try {

      const result = await Users.findByPk(id,{
        attributes: ['id'],
        include: {
          model: Cart,
          as:'cart'
        }
      });
      return result.id
    } catch (error) {
      throw error;
    }
  }
}

module.exports =UserServices;