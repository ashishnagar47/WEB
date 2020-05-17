const {Router}=require('express')

const route=Router()

const {
    createNewPost,
    addNewPost,
    findAllPosts
}=require('../../controllers/posts')

route.get('/',async(req,res)=>{
    const post=await findAllPosts()
    .catch((err)=>{console.log(err)})
    res.status(200).send(post)
}
)

route.post('/',async(req,res)=>{
    const{title,body}=req.body;
    if((!title)||(!body)){
        res.status(400).send({
            error: ' title or body to create post '
        })
    }
    const posts=await addNewPost(title,body)
    .catch((err)=>{console.log(err)})
    res.status(200).send(posts)
})


// route.post('/',async(req,res)=>{
//     const{userId,title,body}=req.body;
    
//     if((!userId)||(!title)||(!body)){
//         res.status(400).send({
//             error: 'Need userid, title or body to create post '
//         })
//     }
//     const posts=await createNewPost(userId,title,body)
//     .catch((err)=>{console.log(err)})
//     res.status(200).send(posts)
// })

module.exports={
    postsRoute:route}