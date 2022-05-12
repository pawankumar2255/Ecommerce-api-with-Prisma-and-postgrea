const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const createSeller = async (req,res)=>{
    try {
        const { name, email, gstNumber, phoneNumber} = req.body
        await  prisma.seller.create({
            data:{
                name,email,gstNumber,phoneNumber
            }
        })
        res.status(200).json({msg: 'Done'})
    } catch (error) {
        console.log(error.message);
        res.status(400).json({msg:'bad request'})
    }
}



const getSeller  = async (req,res)=>{
    try {
        const seller = await prisma.seller.findMany()
        res.status(200).json(seller)
    } catch (error) {
        console.log(error.message);
        res.status(400).json({msg:'bad request'})
    }
}


const getSellerById = async (req,res)=>{
    try {
        const {id} = req.params
        console.log(id);
        const getData = await prisma.seller.findUnique({
            where:{
                id:parseInt(id)
            }
        })
        res.status(200).json(getData)
    } catch (error) {
        console.log(error.message);
        res.status(400).json({msg:"bad request"})
    }
}


const updateSellerById = async (req,res)=>{
    try {
        const {id} = req.params
        const dataForUpdate = {
            name : await req.body.name,
            email : await req.body.email,
            gstNumber: await req.body.gstNumber,
            phoneNumber: await req.body.phoneNumber
        }
        const updateData = await prisma.seller.update({
            where:{
                id:parseInt(id)
            },
            data: dataForUpdate
        })
        res.status(200).json(updateData)
    } catch (error) {
        console.log(error.message);
        res.status(400).json({msg:"bad request"})
    }
}



const deleteSellerById = async (req,res)=>{
    try {
        const {id} = req.params
        await prisma.seller.delete({
            where:{
                id:parseInt(id)
            }
        })
        res.status(200).json({msg:'data deleted successfully'})
    } catch (error) {
        console.log(error.message);
        res.status(400).json({msg:"bad request"})
    }
}



module.exports = {
    createSeller,
    getSeller,
    getSellerById,
    updateSellerById,
    deleteSellerById
}