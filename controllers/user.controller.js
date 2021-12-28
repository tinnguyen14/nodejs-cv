var User= require('../models/User')
module.exports.login= function(req, res,next){
    res.render('login')
}
module.exports.postlogin= function(req, res){
    var username=req.body.username;
    var password=req.body.password;
    var user =User.get('user').find({username: username}.value())
    if (!user) {
        res.render('login', {
          errors: [
            'User does not exist.'
          ],
          values: req.body
        });
        return;
      }
    
      var hashedPassword = md5(password);
    
      if (user.password !== hashedPassword) {
        res.render('auth/login', {
          errors: [
            'Wrong password.'
          ],
          values: req.body
        });
        return;
      }
    
      res.cookie('userId', user.id, {
        signed: true
      });
    
      res.redirect('/');
    };
