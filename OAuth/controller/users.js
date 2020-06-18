const {User}=require('../models/User.js')


async function createUser(name,email,password,password2){
    const user=await User.create({
        name,email,password,password2
    })
    return user
}

module.exports={
    createUser
}