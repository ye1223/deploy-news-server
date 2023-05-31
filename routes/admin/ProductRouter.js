const express = require('express')
const ProductRouter = express.Router()
const multer = require('multer')
const upload = multer({dest:'public/product-cover-uploads/'})
const ProductController = require('../../controllers/admin/ProductController')

ProductRouter.post('/adminapi/product/add',upload.single('file'),ProductController.add)

ProductRouter.get('/adminapi/product/lists',ProductController.getList)
ProductRouter.get('/adminapi/product/lists/:userid',ProductController.getList)
ProductRouter.get('/adminapi/product/list/:productid',ProductController.getList)
ProductRouter.post('/adminapi/product/list',upload.single('file'),ProductController.updateList)//编辑新闻
ProductRouter.delete('/adminapi/product/list/:productid',ProductController.deleteList)



module.exports = ProductRouter