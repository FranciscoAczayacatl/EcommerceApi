const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const options = {
  apis: [
    "./src/routes/auth.routes.js",
    "./src/models/users.js",
    "./src/routes/product.routes.js",
    "./src/models/product.js",
    "./src/routes/productCart.routes.js",
    "./src/models/product_car.js",
    "./src/routes/cart.routes.js",
    "./src/models/cart.js",
    "./src/routes/order.routes.js",
    "./src/models/order.js"
  ],
  definition:{
    openapi: '3.0.0',
    info: {
      title: 'ecommece api',
      version: '0.0.9',
      description: 'api de un ecommerce'
    }
  }
}

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/api/v2/docs.json', (req, res) => {
    res.setHeader({'Content-Type':'application/json'});
    res.send(swaggerSpec);
  });
  console.log(`la documentacione esta disponible en ${process.env.URL}:${port}/api/v1/docs`);
}

module.exports = swaggerDocs;