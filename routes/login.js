var express = require('express');
var router = express.Router();
var controller =require('../controllers/user.controller')
/* GET users listing. */
router.get('/login', controller.login);
router.post('/', controller.postlogin);
module.exports = router;
