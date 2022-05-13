const express = require('express')
const {
    createSeller,
    getSeller,
    getSellerById, 
    updateSellerById, 
    deleteSellerById
} = require('./controllers/seller.controller')
const {
    createProduct,
    getProduct,
    getProductById,
    updateProductById,
    deleteProductById,
    getProductBySellerId,
    getProductByUserId
} = require('./controllers/product.controller')

const {
    showUser,
    showUserById,
    createUser,
    updateUserById,
    deleteUserById
} = require('./controllers/user.controller')
const app = express()


app.use(express.json())

app.post('/seller', createSeller)
app.get('/seller',getSeller)
app.get('/seller/:id',getSellerById)
app.patch('/seller/:id',updateSellerById)
app.delete('/seller/:id',deleteSellerById)
app.get('/product',getProduct)
app.get('/product/:id',getProductById)
app.post('/product',createProduct)
app.patch('/product/:id',updateProductById)
app.delete('/product/:id',deleteProductById)
app.get('/product/:sellerId/seller',getProductBySellerId)
app.get('/product/:userId/user',getProductByUserId)
app.get('/user',showUser)
app.get('/user/:id',showUserById)
app.post('/user',createUser)
app.patch('/user/:id',updateUserById)
app.delete('/user/:id',deleteUserById)


app.listen(process.env.PORT || 2002,()=>{

    console.log('server listening ');
})