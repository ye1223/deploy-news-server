const ProductModel = require("../../models/ProductModel")

const ProductService = {
    getList:()=>{
        return ProductModel.find()
    }
}

module.exports = ProductService