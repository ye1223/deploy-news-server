const ProductModel = require("../../models/ProductModel")

const ProductService = {
    add:({title,introduction,detail,productCover,editTime})=>{
        return ProductModel.create({title,introduction,detail,productCover,editTime})
    },
    getList:(productid)=>{

        if(productid){
            return ProductModel.find({_id:productid})
        }

        return ProductModel.find()
    },
    deleteList:(_id)=>{
        return ProductModel.deleteOne({_id})
    },
    updateList:({_id,title,introduction,detail,productCover,editTime})=>{
        // 有可能前端编辑界面并没有更改封面
        if(productCover){
            return ProductModel.updateOne({_id},{title,introduction,detail,productCover,editTime})
        }else{
            return ProductModel.updateOne({_id},{title,introduction,detail,editTime})
        }
        
    }
}

module.exports = ProductService