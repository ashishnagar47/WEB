const {Posts,Users}=require('../db/models');
const {getUserByUsername}=require('./users')



async function getid(name){
  return getUserByUsername(name)
}

async function createNewPost(userId,title,body){
    const post=await Posts.create({
      userId,
      title,
      body
    }).catch((err)=>{
      console.log(err)
    })
    return post;
}

async function addNewPost(title,body,username){
      const post=await Posts.create({
        title,
        body,
        username
      }).catch((err)=>{
        console.log(err)
      })
      return post;
}

async function findAllPosts(query){
  //TODO handling query params
  const posts=await Posts.findAll({
    include:Users
   } ).catch((err)=>{
    console.log(err)
  })
  return posts;
}

module.exports={
  createNewPost,
  findAllPosts,
  addNewPost
}


/*
*showAllPosts{userid:};
*showAllPosts{title:};
*/
//Test Code 
// async function task() {

//     console.log(
//     //   await addNewPost(
//     //     'this is a sample post',
//     //     'this is a sample title',
//     //     'crooked-bull'
//     //   )
//     // ),
//     // console.log(
//     //   await addNewPost(
        
//     //     'this is another post',
//     //     'another title'
//     //   ),

//       await findUser(
//         'crooked-bull'
//       )
//     )

// // const posts=await showAllPosts()
// //   for(let p of posts){
// //     console.log(`${p.title}\nauthor:${p.user.username}\n${p.body}\n================\n`)
// //   }
// }
//  task()

// .catch((err)=>{
//   console.log(err)
// })

