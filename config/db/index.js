const mongoose = require('mongoose')
async function connect(){
   try{
    await mongoose.connect('mongodb://localhost:27017/store_dev');
    console.log('sucessfully');
    }
   catch(error){
    console.log('fail');
   }
}
module.exports = {connect};