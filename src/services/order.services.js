const Order = require('../models/order');
const Product = require('../models/product');
const ProductOrder = require('../models/product_order');

class OrderServices {

  static add(order){
    try {
      console.log(order);
      const result = Order.create(order);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async get(user_id){
    try {
      const result = Order.findAll({
        where:{user_id},
        attributes: ['id','totalPrice'],
        include:{
          model:ProductOrder,
          as:'productOrder',
          attributes: ['id'],
          include:{
            model: Product,
            as:'product'
          }
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = OrderServices;