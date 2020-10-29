const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path')
require('./db/mongoose')

const users = require('./routes/users')
const products = require('./routes/Products')
const verifyToken = require('./middleware/auth')
dotenv.config()
var app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/users',users);
app.use('/products', verifyToken,  products )

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});