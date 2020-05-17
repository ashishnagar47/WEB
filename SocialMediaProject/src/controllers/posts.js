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

async function addNewPost(title,body){
      const post=await Posts.create({
        title,
        body
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
//       await createNewPost(
//         '1',
//         'this is a sample post',
//         'this is a sample title'
//       )
//     ),
//     console.log(
//       await createNewPost(
//         '2',
//         'this is another post',
//         'another title'
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

