const {User}=require('../models/User')


async function createUser(username,email,password){
    const user=await User.create({
        username,email,password
    })
    return user
}

module.exports={
    createUser
}