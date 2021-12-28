const { redirect } = require('express/lib/response');
const { create } = require('../models/Product');
var Product= require('../models/Product')
module.exports.index= function(req, res,next){
    Product.find({})
    .then(product => res.render('index', {product}))
    .catch(next);
}
module.exports.create= function(req, res,next){
        res.render('create')
}
module.exports.store= function(req, res,next){
        const product= new Product(req.body)
        product.save()
        res.render('store')
}
module.exports.admin= function(req, res,next){
    Product.find({})
    .then(product => res.render('admin', {product}))
    .catch(next);
}
module.exports.edit= function(req, res,next){
    Product.findById(req.params.id)
    .then(product => res.render('edit', {product}))
    .catch(next);
}
module.exports.update= function(req, res,next){
    Product.updateOne({_id: req.params.id}, req.body)
    .then(() => res.redirect('/admin'))
    .catch(next);
}
module.exports.delete= function(req, res,next){
    Product.deleteOne({_id: req.params.id})
    .then(() => res.redirect('/admin'))
    .catch(next);
}
