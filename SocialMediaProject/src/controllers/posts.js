const {Posts,Users}=require('../db/models');

async function createNewPost(userId,body,title){
    const post=await Posts.create({
      userId,
      title,
      body
    })
    return post;
}

async function showAllPosts(query){
  //TODO handling query params
  const posts=await Posts.findAll({
    include:Users
   } );
  return posts;
}

module.exports={
  createNewPost,
  showAllPosts
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
// 
// const posts=await showAllPosts()
//   for(let p of posts){
//     console.log(`${p.title}\nauthor:${p.user.username}\n${p.body}\n================\n`)
//   }
// }
//  task()

// .catch((err)=>{
//   console.log(err)
// })

