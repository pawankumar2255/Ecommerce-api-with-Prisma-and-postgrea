const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



const createProduct = async (req,res)=>{
    try {
        const { name, price, description, productImage, isStock, isDiscount, discountPrice, category, sellerId} = await req.body
        
        await prisma.product.create({
            data:{
                name, 
                price, 
                description, 
                productImage, 
                isStock, 
                isDiscount, 
                discountPrice, 
                category, 
                sellerId 
            }
        })
        res.status(200).json({msg:"A new product is added successfully"})
    } catch (error) {
        console.log(error.message);
        res.send(400).json({err: error.message})
    }
}


const getProduct = async (req,res)=>{
    try {
        const products = await prisma.product.findMany()
        res.status(200).json(products)
    } catch (error) {
        console.log(error.message);
        res.status(400).json({msg:'bad request'})
    }
}



const getProductById = async (req,res)=>{
    try {
        const { id } = await req.params
        const product = await prisma.product.findUnique({
            where:{
                id:parseInt(id)
            }
        })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({msg:"bad request"})
    }
}


const getProductBySellerId = async(req,res)=>{
    try {
        const id = req.params.sellerId
        const productAvailable  = await prisma.product.findMany({
            where :{
                sellerId: parseInt(id)
            }
        })
        res.status(200).json(productAvailable)
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}



const updateProductById = async (req,res)=>{
    try {
        const { id } = req.params
        const dataForUpdate = {
            name: await req.body.name, 
            price:await req.body.price, 
            description:await req.body.description, 
            productImage:await req.body.productImage, 
            isStock:await req.body.isStock, 
            isDiscount:await req.body.isDiscount, 
            discountPrice:await req.body.discountPrice, 
            category:await req.body.category, 
            sellerId:await req.body.sellerId
        }
        await prisma.product.update({
            where:{
                id:parseInt(id)
            },
            data:dataForUpdate
        })
        res.status(200).json({msg:'Product updated successfully'})
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}



const deleteProductById = async (req,res)=>{
    try {
        const { id } = req.params
        await prisma.product.delete({
            where:{
                id : parseInt(id)
            }
        })
        res.status(200).json({msg:"Product Deleted Successfully"})
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}





module.exports = {
    createProduct, 
    getProduct,
    getProductById,
    updateProductById,
    deleteProductById,
    getProductBySellerId
}