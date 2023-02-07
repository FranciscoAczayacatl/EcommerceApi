const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     userProductsInCar:
 *       type: object
 *       properties:
 *         cart_id:
 *           type: int
 *           example: 3
 *         quantity:
 *           type: int
 *           example: 1
 *         price:
 *           type: float
 *           example: 5000
 *         status:
 *           type: boolean
 *           example: false
 *         products:
 *           type: object
 *           properties:
 *             id:
 *               type: int
 *               example: 2
 *             name:
 *               type: string
 *               example: telefono xiaomi poco4
 *             price:
 *               type: number
 *               format: double
 *               exampe: 500.90
 *             availableQty:
 *               type: int
 *               example: 5
 *             user_id:
 *               type: int
 *               example: 2
 *             status:
 *               type: boolean
 *               example: true
 *             image_product:
 *               type: string
 *               example: http://image.com
 *         totalPrice:
 *           type: int
 *           example: 5000
 */

const Cart = db.define('cart',{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  user_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalPrice:{
    type: DataTypes.FLOAT,
    allowNull: false,
  }
});

module.exports = Cart;