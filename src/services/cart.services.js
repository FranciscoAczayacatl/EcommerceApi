const Cart = require('../models/cart');
const ProductCar = require('../models/product_car');
const Product = require('../models/product')
const Users = require('../models/users');

class CartServices{

  static async add(id, totalPrice){
    try {
      const result = Cart.create({
        user_id: id,
        totalPrice
      });
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getProductsAndSpects(cart_id){
    try {
      const result = await ProductCar.findAll({
        where: {cart_id},
        attributes:['cart_id','quantity','price','status'],
        include:{
          model: Product,
          as: 'products',
        },
      })
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async totalUpdate(id,totalPrice){
    try {
      const result = await Cart.update(totalPrice,{
        where:{id}
      })
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getUser(id){
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error
    }
  }

}

module.exports = CartServices;