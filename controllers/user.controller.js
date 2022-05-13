const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


const showUser = async(req,res)=>{
    try {
        const userData = await prisma.user.findMany()
        res.status(200).json(userData)
    } catch (error) {
        res.status(400).json({msg:"bad request"})
    }
}

const showUserById =  async(req,res)=>{
    try {
        const userData = await prisma.user.findUnique({where:{id:parseInt(req.params.id)}})
        res.status(200).json(userData)
    } catch (error) {
        res.status(400).json({msg:"bad request"})
    }
}

const createUser = async(req,res)=>{
    try {
        await prisma.user.create({data:req.body})
        res.status(200).json({msg:"user created successfully"})
    } catch (error) {
        res.status(400).json({msg:"bad request"})
    }
}


const updateUserById  = async (req,res)=>{
    try {
        const { id } =  req.params
        console.log(id);
        await prisma.user.update({
            where:{
                id:parseInt(req.params.id)
            },data:req.body
        })
        res.status(200).json({msg:'Product updated successfully'})
    } catch (error) {
        res.status(400).json({msg:'Bad request'})
    }
}


const deleteUserById = async(req,res)=>{
    try {
        await prisma.user.delete({where:{id:parseInt(req.params.id)}})
        res.status(200).send('data deleted')
    } catch (error) {
        res.status(400).json({msg:"bad request"})
    }
}
module.exports = {
    showUser,
    showUserById,
    createUser,
    updateUserById,
    deleteUserById
}