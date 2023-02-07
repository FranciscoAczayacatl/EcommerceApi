const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');
require('dotenv').config();

/**
 * @openapi
 * components:
 *   schemas:
 *     register:
 *       type: object
 *       properties:
 *         firsname:
 *           type: string
 *           example: Francisco
 *         lastname:
 *           type: string
 *           example: garcia
 *         email:
 *           type: string
 *           example: g_u_ero55@hotmail.com
 *         phone:
 *           type: string
 *           example: 1234567890
 *         password:
 *           type: string
 *           example: 1234
 *         username:
 *           type: string
 *           example: mrStich
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: g_u_ero55@hotmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     loginResponse:
 *       type: object
 *       properties:
 *         firsname:
 *           type: string
 *           example: francisco
 *         lastname:
 *           type: string
 *           example: garcia
 *         id:
 *           type: int
 *           example: 2
 *         email:
 *           type: string
 *           example: g_u_ero55@hotmail.com
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJnX3VfZXJvNTVAaG90bWFpbC5jb20iLCJmaXJzbmFtZSI6ImZyYW5jaXNjbyIsImxhc3RuYW1lIjoiR2FyY2lhIiwiaWF0IjoxNjc0NzAzNDExLCJleHAiOjE2NzQ3MDQwMTF9.ZLOd55MPO4hAtCfhOlGrwgTyA7-qospRb9XL_mzkpcI2kf9P5bZb3JCMroGrEk8U32seUrcFfGG8fMUNM8jn0w
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

const Users = db.define("users", {
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  firsname:{
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  lastname:{
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  username:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING(30),
    unique: true,
    validate: {
      isEmail: true,
    },
    allowNull: false,
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone:{
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  profile_image:{
    type: DataTypes.STRING,
    allowNull: true,
  }
},{
  hooks:{
    beforeCreate: (user, options) => {
      const {password} = user;
      const hash = bcrypt.hashSync(password,Number(process.env.HASH_COUNT));
      user.password= hash;
    }
  }
}
);

module.exports = Users;