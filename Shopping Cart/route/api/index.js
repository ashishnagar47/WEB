const route=require('express').Router()

const {prod}=require('./product')
const {Usr}=require('./user')

route.use('/users',Usr)

route.use('/products',prod)

module.exports={route};