const NewsService = require("../../services/admin/NewsService")

const NewsController = {
    add:async (req,res)=>{
        // console.log(req.file,req.body)
        const coverPath = req.file?`/coveruploads/${req.file.filename}`:''
        const {title,content,category,isPublish,userID} = req.body
        await NewsService.add({
            title,
            content,
            category:Number(category),
            isPublish:Number(isPublish),
            coverPath,
            editTime:new Date(),
            userID
        })
        res.send({
            ActionType:'OK'
        })
    },
    getList:async (req,res)=>{
        const newsid = req.params.newsid
        // console.log('useridddddd',req.params.newsid)
        const userid = req.params.userid

        const result = await NewsService.getList(newsid,userid)
        console.log('reslut',result)
        await res.send({
            ActionType:'OK',
            newsList:result
        })
    },
    publish:async (req,res)=>{
        const {_id,isPublish} = req.body
        await NewsService.publish({_id,isPublish,editTime:new Date()})
        // console.log(typeof isPublish)
        res.send({
            ActionType:'OK'
        })
    },
    deleteList:async (req,res)=>{
        const newsid = req.params.newsid
        await NewsService.deleteList(newsid)

        res.send({
            ActionType:'OK'
        })

    },
    updateList:async (req,res)=>{
        const coverPath = req.file?`/coveruploads/${req.file.filename}`:''
        const {title,content,category,isPublish,_id} = req.body
        await NewsService.updateList({
            _id,
            title,
            content,
            category:Number(category),
            isPublish:Number(isPublish),
            coverPath,
            editTime:new Date()
        })
        res.send({
            ActionType:'OK'
        })
    }
}

module.exports = NewsController