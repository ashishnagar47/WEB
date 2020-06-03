const {Users}=require('../db/models')
const {genRandomUserName}=require('../utils/username')

async function createAnonUser(){
 // try{
    const user=await Users.create({
        username:genRandomUserName()
    })
    return user;
  // catch(err){
  //   console.log(err)
  // }
}

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
//         console.log(await getUserById('2'))
//         console.log('-------------------')
//         console.log(await getUserById('2'))
//         console.log('-------------------')
//         console.log(await getUserById('2'))
//         console.log('-------------------')
//         console.log(await getUserById('2'))
//         console.log('-------------------')
// }task()
//   .catch((err)=>{
//   console.log(err)
//   })

