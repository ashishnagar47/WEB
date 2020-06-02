const {Users,Posts,Comments}=require('../db/models')

async function createNewComment(postId,userId,title,body){
    return await Comments.create({
        postId,
        userId,
        title,
        body
    })
}

async function showComments(query){
    const postId=query.postId
    return await Comments.findAll({
        include:[Users],
        where:{postId}
    })

}

module.exports={
    createNewComment,
    showComments
}


//Test Code 
//async function task() {

    // console.log(
    //   await createNewComment(
    //     '25',
    //     'this is a sample title',
    //     'this is a sample Comment Body',
        
    //   )
    // )    

// const comments=await showComments()
//   for(let c of comments){
//     console.log(`nauthor:${c.user.username}\n${c.body}\n================\n`)
//   }
// }
//  task()

// .catch((err)=>{
//   console.log(err)
// })

