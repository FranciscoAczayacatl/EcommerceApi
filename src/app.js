const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routerApi = require('./routes');
const db = require("./utils/database");
const initModels = require("./models/InitModels");

const app=express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

initModels();

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));
  
db.sync( {force: false}) 
.then(() => console.log("Base sincronizada"))
.catch((error) => console.log(error));



routerApi(app);

module.exports = app;
