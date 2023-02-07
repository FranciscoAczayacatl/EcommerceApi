const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Cart = require("./cart");

/**
 * @openapi
 * components:
 *   schemas:
 *     addCar:
 *       type: object
 *       properties:
 *         id_user:
 *           type: int
 *           example: 11
 *         product_id:
 *           type: int
 *           example: 7
 *         quantity:
 *           type: int
 *           example: 1
 *     productCar:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: creado
 *         data:
 *           type: object
 *           properties:
 *             id:
 *               type: int
 *               example: 3
 *             card_id:
 *               type: int
 *               example: 4
 *             product_id:
 *               type: int
 *               example: 7
 *             quantity:
 *               type: int
 *               example: 1
 *             price:
 *               type: int
 *               example: 9200
 *             status:
 *               type: boolean
 *               example: false
 *     purchase:
 *       type: object
 *       properties:
 *         totalPrice:
 *           type: int
 *           example: 11000
 *         productsId:
 *           type: array
 *           items:
 *             type: int
 *           example: [1,3,5]
 */


const ProductCar = db.define('product_car',{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  cart_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cart,
      key: 'id',
    },
  },
  product_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = ProductCar;