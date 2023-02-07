const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Product = require("./product");

const ProductOrder = db.define('product_order',{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  order_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
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
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
});

module.exports = ProductOrder;