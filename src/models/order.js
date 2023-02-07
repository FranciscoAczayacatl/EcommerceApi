const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     orders:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 3
 *         totalPrice:
 *           type: int
 *           example: 12000
 *         productOrder:
 *           type: object
 *           properties:
 *             id:
 *               type: int
 *               example: 23
 *             product:
 *               type: object
 *               properties:
 *                 id:
 *                   type: int
 *                   example: 2
 *                 name:
 *                   type: string
 *                   example: tv piooner
 *                 price:
 *                   type: int
 *                   example: 6200
 *                 availableQty:
 *                   type: int
 *                   example: 10
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 user_id:
 *                   type: int
 *                   example: 1
 *                 image_product:
 *                   type: string
 *                   example: http://image.com
 *                 createdAt:
 *                   type: string
 *                   example: 2023-02-03T01:58:38.002Z
 *                 updateAt:
 *                   type: string
 *                   example: 2023-02-03T01:58:38.002Z
 */

const Order = db.define('order',{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  totalPrice:{
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  user_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Order;