const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username: {
        type: String,
        required: 'This field is required.'
      },
      
      password: {
        type: String,
        required: 'This field is required.'
      },
});

module.exports=mongoose.model('User', User);