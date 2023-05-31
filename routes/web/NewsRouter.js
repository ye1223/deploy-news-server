const express = require('express')
const NewsRouter = express.Router()
const NewsController = require('../../controllers/web/NewsController')


NewsRouter.get('/webapi/news/lists',NewsController.getList)
NewsRouter.get('/webapi/news/list/:newsid',NewsController.getList)
NewsRouter.get('/webapi/news/top-lists',NewsController.getTopLists)

module.exports = NewsRouter