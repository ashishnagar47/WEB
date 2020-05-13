const {Users}=require('../db/models')
const {genRandomUserName}=require('../utils/username')

async function createAnonUser(){
    const user=await Users.create({
        username:genRandomUserName()
    })
    return user;
}createAnonUser()
.catch((err)=>{
  console.log(err)
})

async function getUserById(id){
  return await Users.findOne({where:{id}})
}

async function getUserByUsername(username){
  return await Users.findOne({where:{username}})
}

module.exports={
  createAnonUser,
  getUserById,
  getUserByUsername
}


//Teesting of code 
// async function task(){
//         console.log(await createAnonUser())
//         console.log('-------------------')
//         console.log(await createAnonUser())
//         console.log('-------------------')
//         console.log(await createAnonUser())
//         console.log('-------------------')
//         console.log(await createAnonUser())
//         console.log('-------------------')
// }
// task()
// .catch((err)=>{
//   console.log(err);
// })
