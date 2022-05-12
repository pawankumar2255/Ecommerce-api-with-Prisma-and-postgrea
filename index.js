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
    getProductBySellerId} = require('./controllers/product.controller')
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
app.get('/product/sellername/:sellerId',getProductBySellerId)


app.listen(2002,()=>{

    console.log('server listening ');
})