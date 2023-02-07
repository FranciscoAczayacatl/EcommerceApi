const OrderServices = require("../services/order.services")

const getOrden = async(req, res) =>{
  try {
    const {user_id} = req.params;
    const result = await OrderServices.get(user_id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({error})
  }
}

module.exports = getOrden;