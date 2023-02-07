const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     addProduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: tv LG 32 pulgadas
 *         price:
 *           type: float
 *           example: 9200.00
 *         availableQty:
 *           type: int
 *           example: 10
 *         status:
 *           type: boolean
 *           example: true
 *         user_id:
 *           type: int
 *           example: 2
 *         image_product:
 *           type: string
 *           example: http://image.com
 *     product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: tv LG 32 pulgadas
 *         price:
 *           type: float
 *           example: 9200.00
 *         availableQty:
 *           type: int
 *           example: 10
 *         status:
 *           type: boolean
 *           example: true
 *         user_id:
 *           type: int
 *           example: 2
 *         image_product:
 *           type: string
 *           example: http://image.com
 *         user:
 *           type: object
 *           properties:
 *             firsname: 
 *               type: string
 *               example: francisco
 *             lastname:
 *               type: string
 *               example: garcia
 */

const Product = db.define('product',{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  price:{
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  availableQty:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  user_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image_product:{
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports =Product;