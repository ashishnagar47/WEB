const {Router}=require('express')

const route=Router()

const {
    createAnonUser,
    getUserbyId,
    getUserbyUsername
}=require('../../controllers/users')

route.get('/:id',async(req,res)=>{
    let user;

    if(isNaN(parseInt(req.param.id))){
        //when param is username
        user=await getUserbyUsername(req.param.id)
    }
    else{
        //when param is userid
        user=await getUserbyId(req.param.id)
    }

    if(user){
        res.status(200).send(user)
    }
    else{
        res.status(404).send("No such username or userid found")
    }
})

route.post('/',async(req,res)=>{
        const user=createAnonUser;
        res.status(201).send(user);
})

module.exports={
    usersRoute:route}