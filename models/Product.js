const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  name: { type: String,required:true },
  img: { type: String, required:true},
  price: { type: String, required:true},
});

module.exports=mongoose.model('Product', Product);