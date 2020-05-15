const {User}=require('../../db')

const Usr=require('express').Router()

Usr.get('/',(req,res)=>{
    User.findAll()
        .then((users)=>{
            res.status(200).send(users)
        })
        .catch((err)=>{
            res.status(500).send({
                error:'could not retrieve user'
            })
        })
})

Usr.post('/',(req,res)=>{ 
    User.create({
        name:req.body.name
    })
    .then((user)=>{
        res.status(200).send(user)
    })
    .catch((err)=>{
        res.status(501).send({
            err:'could not add user'
        })
    })
})


module.exports={Usr};

