const Route=require('express').Router()

const product=require('./product')
const user=require('./user')

Route.use('/users',user)

Route.use('/products',product)

module.exports={
    Route
}