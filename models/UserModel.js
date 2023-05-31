const  mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserType = {
    username:String,
    password:String,
    gender:Number,
    introduction:String,//个人简介
    avatarPath:String,
    role:Number//权限
}

//user模型 对应 users集合
const UserModel = mongoose.model('user',new Schema(UserType))

module.exports = UserModel