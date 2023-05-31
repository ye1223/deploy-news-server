const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewsType = {
    title:String,
    content:String,
    category:Number, // 1最新动态 2典型案例 3通知公告
    coverPath:String,
    isPublish:Number,
    editTime:Date,
    userID:String
}

const NewsModel = mongoose.model('news',new Schema(NewsType))

module.exports = NewsModel 