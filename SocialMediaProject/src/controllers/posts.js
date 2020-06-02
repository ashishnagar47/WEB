const {Posts,Users}=require('../db/models');



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

async function findMyPosts(id){
  const posts=await Posts.findAll({
    include:{model:Users,
    where:{id:id}
   }}).catch((err)=>{
    console.log(err)
  })
  return posts;
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
  findMyPosts
}


/*
*showAllPosts{userid:};
*showAllPosts{title:};
*/
//Test Code 
// async function task() {

//     console.log(
//       await createNewPost(
//         '2',
//         'this is a sample post',
//         'this is a sample title',
        
//       )
//     )    

// const posts=await findMyPosts('2')
//   for(let p of posts){
//     console.log(`${p.title}\nauthor:${p.user.username}\n${p.body}\n================\n`)
//   }
// }
//  task()

// .catch((err)=>{
//   console.log(err)
// })

