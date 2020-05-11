const {Users}=require('../db/models')
const {genRandomUserName}=require('../utils/username')

async function createAnonUser(){
    const user=await Users.create({
        username:genRandomUserName()
    })
    return user;
}

async function getUserbyId(id){
  return await Users.findOne({where:{id}})
}

async function getUserbyUsername(username){
  return await Users.findOne({where:{username}})
}

module.exports={
  createAnonUser,
  getUserbyId,
  getUserbyUsername
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
