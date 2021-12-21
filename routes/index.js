var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  var popular= db.get('popular')
  res.render('index', {
    data: popular.value()
  });
});

module.exports = router;
