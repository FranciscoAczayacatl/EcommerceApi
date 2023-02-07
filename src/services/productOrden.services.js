const ProductOrder = require('../models/product_order');

class ProductOrderService{
  static async create(quantity,price,productsId,id){
    try {
      const order_id = id;
      console.log(id);
      const product_id = productsId;
      const status = true;
      const data = [];
      
      for (let i = 0; i < productsId.length; i++) {
        data.push({order_id,product_id:product_id[i],quantity:quantity[i],price:price[i],status});
      }
      data.forEach(async (item)=>{
        await ProductOrder.create(item);
      })
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductOrderService;