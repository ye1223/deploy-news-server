const express = require('express')
const ProductRouter = express.Router()
const ProductController = require('../../controllers/web/ProductController')

ProductRouter.get('/webapi/product/lists',ProductController.getList)

module.exports = ProductRouter