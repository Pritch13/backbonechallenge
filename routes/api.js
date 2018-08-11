const express = require('express');
const router = express.Router();
const Product = require('../models/product');


//Get list of Products from DB
router.get('/product', function (req, res, next) {
    Product.find().then(function (product) {
        res.send(product);
    })
});

//Find one Product in DB
router.get('/product/:id', function (req, res, next) {
    Product.findOne({ _id: req.params.id }).then(function (product) {
        res.send(product);
    })
});

// //Add a new Product to DB - if this was required
// router.post('/product', function (req, res, next) {
//     Product.create(req.body).then(function (product) {
//         res.send(product);
//     }).catch(next);
// });

//Update Product in DB
router.put('/product/:id', function (req, res, next) {
    Product.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Product.findOne({ _id: req.params.id }).then(function (product) {
            res.send(product);
        })

    })
});

//Delete Product in DB
router.delete('/product/:id', function (req, res, next) {
    Product.findByIdAndRemove({ _id: req.params.id }).then(function (product) {
        res.send(product);
    })
});

module.exports = router;