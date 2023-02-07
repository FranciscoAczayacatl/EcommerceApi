const AuthServices = require('../services/auth.services');
const CartServices = require('../services/cart.services');
const transporter = require('../utils/mailer');

const register = async (req, res) => {
  try {
    const user = req.body;
    const result = await AuthServices.register(user);
    if (result) {
      const {id} = result;
      const totalPrice = 0;
      await CartServices.add(id, totalPrice);
      res.status(201).json({message: 'user created'});
      await transporter.sendMail({
        from: "franciscoaczayacatlg@gmail.com",
        to: result.email,
        subject: "Email confirmator",
        html: '<h1>bienbenido al a la tienda en linea</h1><p>tienes que confirmar el email</p> <a href="http://google.com" target="_blank" >enlase</a> '
         });
    } else{
      res.status(400).json({message: 'something wrong'});
    }

  } catch (error) {
    res.status(400).json(error.message);
  }
}

const userLogin = async (req, res) => {
  try {
    const { email , password} = req.body;
    if (!email) {
      res.status(400).json({
        error: "Missing data",
        message: "not email  provided"
      });
    }
    if (!password) {
      res.status(400).json({
        error: "Missing data",
        message: "not password provided"
      });
    }
    const result = await AuthServices.login({email, password});
    if (result.isvalid) {
      const {firsname, lastname, username, id, email} = result.user;
      const userData = {username, id, email, firsname, lastname};
      const token = AuthServices.genToken(userData);
      userData.token = token
      res.json(userData);
    }else{
      res.status(400).json({message: 'user not fount'})
    }
    
  } catch (error) {
    res.status(400).json({
      error: "Something wrong ",
      
    });
  }
}



module.exports ={
  register,
  userLogin
}