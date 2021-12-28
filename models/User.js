const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username: { type: String,default: '' },
    password: { type: String, default: ''},
});

module.exports=mongoose.model('User', User);