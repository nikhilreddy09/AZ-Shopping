const mongoose = require('mongoose')

const uri = "mongodb+srv://admin:admin@cluster0.rlfeh.mongodb.net/AZShopping?retryWrites=true&w=majority"

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {     
  console.log("MongoDB connection sucessfull");
});