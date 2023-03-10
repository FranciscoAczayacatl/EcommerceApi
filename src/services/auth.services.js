const Users =require('../models/users');
const bcrypt = require('bcrypt');
const jwt =require("jsonwebtoken");
require('dotenv').config;

class AuthServices {

  static async register(user){
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async login(credentials){
    try {
      const {email, password} = credentials;
      const user = await Users.findOne({where: {email}});
      if(user){
        const isvalid = bcrypt.compareSync(password, user.password);
        return isvalid ? {isvalid, user} : {isvalid}
      }
      return {isvalid: false}
    } catch (error) {
      throw error;
    }
  }

  static genToken(data){
    try {
      const token =jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: '10m',
        algorithm: "HS512"
      });
      return token;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = AuthServices;