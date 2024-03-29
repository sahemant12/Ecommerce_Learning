const express = require('express')
const router = express.Router()
const productController = require('../controller/product.jsx')

router
    .get('/allProducts', productController.getAllProduct)
    .post('/product/new', productController.createProduct)
    .get('/product/:id', productController.getProduct)
    .put('/product/:id', productController.updateProduct)
    .patch('/product/:id', productController.replaceProduct)
    .delete('/product/:id', productController.deleteProduct)
 
exports.router = router