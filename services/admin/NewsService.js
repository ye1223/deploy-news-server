const UserModel = require('../../models/UserModel')
const NewsModel = require('../../models/NewsModel')
const NewsService = {
    add: ({ title, category, content, isPublish, coverPath, editTime, userID }) => {
        return NewsModel.create({
            title, category, content, isPublish, coverPath, editTime, userID
        })

    },
    getList: async (newsid, userid) => {
        // 根据用户ID找到当前,新闻列表信息，包含userID
        // const newsLists = await NewsModel.find({userID:userid})
        // console.log(newsLists)

        //这个是针对单独一条新闻
        if (newsid) {
            return NewsModel.find({ _id: newsid }, {})
        }

        try {
            const user = await UserModel.findOne({ _id: userid })
            if (user.role === 1) {
                return await NewsModel.find({})
            } else {
                return await NewsModel.find({ userID: user._id }).populate('userID')
            }
        } catch (err) {
            console.error(err) 
        }
    },
    publish: ({ _id, isPublish, editTime }) => {
        return NewsModel.updateOne({ _id }, { isPublish, editTime })
    },
    deleteList: (_id) => {
        return NewsModel.deleteOne({ _id })
    },
    updateList: ({ _id, title, content, category, isPublish, coverPath, editTime }) => {
        // 有可能前端编辑新闻的时候没有更新新闻图片，导致更新传来的为空字符串
        if (coverPath) {
            return NewsModel.updateOne({ _id }, { title, content, category, isPublish, coverPath, editTime })
        } else {
            return NewsModel.updateOne({ _id }, { title, content, category, isPublish, editTime })
        }
    }
}

module.exports = NewsService