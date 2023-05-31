const express = require('express')
const NewsRouter = express.Router()
const NewsController = require('../../controllers/admin/NewsController')
const multer = require('multer')
const upload = multer({dest:'public/coveruploads/'})

NewsRouter.post('/adminapi/news/add',upload.single('file'),NewsController.add)
// NewsRouter.get('/adminapi/news/lists',NewsController.getList)
NewsRouter.get('/adminapi/news/lists/:userid',NewsController.getList)//根据权限判断当前用户ID
NewsRouter.get('/adminapi/news/list/:newsid',NewsController.getList)
NewsRouter.put('/adminapi/news/publish',NewsController.publish)
NewsRouter.post('/adminapi/news/list',upload.single('file'),NewsController.updateList)//编辑新闻
NewsRouter.delete('/adminapi/news/list/:newsid',NewsController.deleteList)

module.exports = NewsRouter