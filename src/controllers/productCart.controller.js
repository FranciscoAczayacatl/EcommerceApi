const ProductServices = require('../services/product.services');
const ProductCartServices = require('../services/productCart.services');
const UserServices = require('../services/users.services');

const addProductCar = async (req, res) =>{
  try {
    const data=req.body
    const {id_user, product_id, quantity} = data;
    if(id_user && product_id && quantity){
      const cart_id = await UserServices.getUserAndCardId(id_user);
      const productId = await ProductServices.getProductById(product_id);
      const {price} = productId;
      const status = false;
      const data ={cart_id,product_id,quantity,price,status};
      const result = await ProductCartServices.add(data);
      res.status(200).json({message: 'creado', data: result });
    }else{
      res.status(400).json({message: 'ingresa los los campos'});
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  addProductCar
}
