const nodeMailer = require('nodemailer');
require('dotenv').config();

//creamos el transportador

const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  secure: true,
  auth: {
    user: 'franciscoaczayacatlg@gmail.com',
    pass: process.env.PASSWORD_G,
  }
});

module.exports = transporter;