var express = require('express');
var router = express.Router();
var controller =require('../controllers/product.controller')
/* GET home page. */
router.get('/',controller.index);
router.get('/admin/create',controller.create);
router.post('/store',controller.store);
router.get('/admin',controller.admin);
router.get('/admin/:id/edit',controller.edit);
router.put('/admin/:id/:id',controller.update);
router.delete('/admin/:id/',controller.delete);
module.exports = router;


