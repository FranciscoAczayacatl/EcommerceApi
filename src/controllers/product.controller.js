const ProductServices = require('../services/product.services');

const createProduct = async (req, res) =>{
  try {
    const product = req.body;
    const result = await ProductServices.newProduct(product);
  if (result) {
    res.status(201).json({message: 'product created'});
  }else{
    res.status(400).json({message: 'something wrong'});
  }
  } catch (error) {
    res.status(400).json(error.message);
  }
}
const getProducts = async (req, res) =>{
  try {
    const result = await ProductServices.getAllproducts();
    const objectProducts = [];
    for (const i in result) {
      if (result[i].availableQty > 0) {
        objectProducts.push(result[i]);
      }
    }
   res.status(200).json(objectProducts)
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  createProduct,
  getProducts
};