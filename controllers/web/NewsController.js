const NewsService = require('../../services/web/NewsService')
const NewsController = {
    getList:async (req,res)=>{
        const result = await NewsService.getList({_id:req.params.newsid})
        res.send({
            ActionType:'OK',
            newsLists:result
        })
    },
    getTopLists:async (req,res)=>{
        const limit = req.query.limit
        const result = await NewsService.getTopLists(limit)

        res.send({
            ActionType:'OK',
            topNewsLists:result
        })
    }
}

module.exports = NewsController