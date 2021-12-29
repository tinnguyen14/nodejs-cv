var User= require('../models/User')
module.exports.login= function(req, res,next){
    res.render('login')
}
module.exports.postlogin= async function(req, res, next){
   
      var  getusername= req.body.username
      var  getpassword= req.body.password
    

    const getUser = await User.find({ username: getusername, password: getpassword })
    if (getUser.length > 0) {
            res.redirect('/')
      }
     else {
        res.redirect('/login');
    }
};
