const { Op } = require('sequelize');

const ProductCar = require('../models/product_car');

class ProductCartServices{
  static async add(data){
    try {
      const result = ProductCar.create(data);
      return result;
    } catch (error) {
      throw error
    }
  }
   static async carPusrchase(user_id,productsId){
    try {
      const cart_id = user_id;
     
        const result = await ProductCar.update({status: true},
          {
           where:{
             cart_id:cart_id
           }
          }) 
      
      return result
    } catch (error) {
      throw error
    }
   }
  
}

module.exports = ProductCartServices;