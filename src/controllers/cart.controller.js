const ProductCar = require('../services/productCart.services');
const CartServices = require('../services/cart.services');
const OrderServices = require('../services/order.services');
const ProductOrderService = require('../services/productOrden.services');
const transporter = require('../utils/mailer');

const getCart = async(req, res) => {
 try {
  const {user_id} = req.params;
  let result = await CartServices.getProductsAndSpects(user_id);
  if (result.length >1 ) {
    const response = [];
    for (let i = 0; i < result.length; i++) {
      if(result[i].status === false){
        response.push(result[i])
      }
    }
    console.log(response);
   if (response.length !== 0) {
    const carId = result[0].cart_id;
    const priceTotalCar = total(result)
    const cartotalUpdate = await CartServices.totalUpdate(carId,{totalPrice:priceTotalCar});
    response.push({totalPrice:priceTotalCar});
    res.status(200).json(response);
   }
   else{
    res.status(200).json([])
  }
  }
  else{
    res.status(200).json([])
  }

 } catch (error) {
  res.status(400).json(error.message)
 }
}

const purchaseCar = async(req, res) => {
  try {
    const {user_id} = req.params;
    const {totalPrice, productsId} = req.body 
    const status = false;
    const order = await OrderServices.add({totalPrice,user_id,status});
    console.log(productsId);
    const update = ProductCar.carPusrchase(user_id,productsId);
    let result = await CartServices.getProductsAndSpects(user_id);
    const quantity =[];
    const price = [];
    result.map( res => quantity.push(res.dataValues.quantity));
    result.map( res => price.push(res.dataValues.price));
    const {id} = order;

    const createProductOrder = ProductOrderService.create(quantity,price,productsId,id);
    const getEmail = await CartServices.getUser(user_id);
    console.log(getEmail);
    await transporter.sendMail({
      from: "franciscoaczayacatlg@gmail.com",
      to: getEmail.email,
      subject: "compra realizada",
      html: '<h1>compra realizada</h1> '
       });
    res.status(200).json({message: 'compra realizada'})
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const total = (result)=>{
  let arr=[];
  result.map(res => arr.push(res.dataValues.quantity*res.dataValues.price) );
  const totalPrice = arr.reduce((a,b)=>a+b); 
  return totalPrice;
};




module.exports = {
  getCart,
  purchaseCar
}