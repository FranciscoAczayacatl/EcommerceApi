const authRoutes = require('./auth.routes');
const productRoutes = require('./product.routes');
const productCarRoutes = require('./productCart.routes');
const carRoutes = require('./cart.routes');
const orderRoutes = require('./order.routes');
const authMiddleware = require('../middlewares/auth.middleware');

const routerApi = (app) => {
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/product',authMiddleware, productRoutes);
  app.use('/api/v1/addproductCar', authMiddleware,productCarRoutes);
  app.use('/api/v1/cart', authMiddleware, carRoutes);
  app.use('/api/v1/order', authMiddleware, orderRoutes);
}

module.exports = routerApi;