const prod=require('express').Router()
const {Product}=require('../../db')

prod.get('/',(req,res)=>{
    Product.findAll()
        .then((products)=>{
            res.status(200).send(products)
        })
        .catch((err)=>{
            console.log(err)
        })
})

prod.post('/',(req,res)=>{
    //Validate  the values
    if(isNaN(req.body.price)){
    return res.status(403).send({
        error:'price is not a valid number'
    })
    }

    // Add a product
    Product.create({
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        price:parseFloat(req.body.price)
    })
    .then((product)=>{
        res.status(200).send(product)
    })
    .catch((err)=>{
        console.log(err)
    })
})


module.exports={prod};