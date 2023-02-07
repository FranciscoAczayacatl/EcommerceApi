const Order = require('./order');
const Cart = require('./cart');
const Product = require('./product');
const Users = require('./users');
const ProductCar = require('./product_car');
const ProductOrder = require('./product_order');


const initModels = () => {
  Product.belongsTo(Users,{as:'user',foreignKey:'user_id'});
  Users.hasMany(Product,{as:'products',foreignKey:'user_id'});
  Order.belongsTo(Users,{as:'user', foreignKey:'user_id'});
  Users.hasMany(Order,{as:'orden', foreignKey:'user_id'});
  Users.hasOne(Cart,{as:'cart', foreignKey:'user_id'});
  Cart.belongsTo(Users,{as:'user',foreignKey:'user_id'});
  Product.hasOne(ProductCar,{as:'productCart',foreignKey:'product_id'});
  ProductCar.hasMany(Product,{as:'products',foreignKey:'id'});
  ProductOrder.belongsTo(Product,{as:'product', foreignKey:'product_id'});
  Product.hasMany(ProductOrder,{as:'productOrder',foreignKey:'product_id'});
  Cart.hasMany(ProductCar,{as:'productCartid', foreignKey:'id'});
  ProductCar.belongsTo(Cart ,{as:'carts', foreignKey:'cart_id'});
  ProductOrder.belongsTo(Order,{as:'ordern',foreignKey:'order_id'});
  Order.hasMany(ProductOrder,{as:'productOrder',foreignKey:'order_id'})


  
}

module.exports = initModels;