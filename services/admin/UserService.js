const UserModel = require("../../models/UserModel")

const UserService = {
    login:(username,password)=>{
       return UserModel.find({username,password})
    },
    upload:({_id,username,introduction,gender,avatarPath})=>{
        return UserModel.updateOne({_id},{
            username,introduction,gender,avatarPath
        })
    },
    add:({username,introduction,gender,avatarPath,role,password})=>{
        return UserModel.create({
            username,
            introduction,
            gender,
            avatarPath,
            role,
            password
        })
    },
    getList:(_id)=>{
        //单个id只找一项
        return _id?UserModel.find({_id},['username','role','introduction','gender','avatarPath']):UserModel.find({},['username','role','introduction','gender','avatarPath'])
    },
    deleteListItem:(_id)=>{
        return UserModel.deleteOne({_id})
    },
    updateListItem:({_id,username,password,introduction,role})=>{
        if(password!==''){
            return UserModel.updateOne({_id},{username,introduction,role,password})
        }else{
            return UserModel.updateOne({_id},{username,introduction,role})
        }
        
    }
}
 
module.exports = UserService