const {User}=require('../models/db')


async function createUser(name,email,password,password2){
    const user=await User.create({
        name,email,password,password2
    })
    return user
}

module.exports={
    createUser
}