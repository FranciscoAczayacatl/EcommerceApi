const Products = require('../models/product');
const Users = require('../models/users');


class ProductServices  {

  static async newProduct(product){
    try {
      const result = await Products.create(product);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAllproducts(){
    try {
      const result = await Products.findAll(
        {
          include: {
            model: Users,
            as:'user',
            attributes:['firsname', 'lastname']

          }
        }
      )
      return result
    } catch (error) {
      throw error
    }
  }
  static async getProductById(id){
    try {
      const result = await Products.findByPk(id);
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getProductsIds(ids){
    try {
       return 0;
      
    } catch (error) {
      throw error
    }
  }
}

module.exports = ProductServices;