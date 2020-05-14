const user=require('../../db').User

const route=require('express').Router

route.get('/',(res,req)=>{
    user.findAll()
        .then((user)=>{
            res.status(200).send(user)
        })
        .catch((err)=>{
            res.status(500).send({
                err:'could not retrieve user'
            })
        })
})

route.post('/',(res,req)=>{
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


module.exports={
    route
}

