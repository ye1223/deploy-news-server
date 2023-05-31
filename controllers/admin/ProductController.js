const ProductService = require("../../services/admin/ProductService")

const ProductController = {
    add:async (req,res)=>{
        const {title,introduction,detail} = req.body
        // console.log("ssss",req.file)
        const productCover = req.file?`/product-cover-uploads/${req.file.filename}`:''
        await ProductService.add({title,introduction,detail,productCover,editTime:new Date()})
        res.send({
            ActionType:'OK'
        })
    },
    getList:async (req,res)=>{
        /* console.log(req.params.userid)
        console.log('----productID----',req.params.productid) */
        const productid = req.params.productid
        const result = await ProductService.getList(productid)
        res.send({
            ActionType:'OK',
            productList:result
        })
    },
    deleteList:async (req,res)=>{
        const productid = req.params.productid
        await ProductService.deleteList(productid)
        res.send({
            ActionType:'OK'
        })
    },
    updateList:async(req,res)=>{
        // const productid = req.params.productid
        const {_id,title,introduction,detail} = req.body
        const productCover = req.file?`/product-cover-uploads/${req.file.filename}`:''
        await ProductService.updateList({
            _id,title,introduction,detail,productCover,editTime:new Date()
        })
        res.send({
            ActionType:'OK'
        })
    }
}

module.exports = ProductController