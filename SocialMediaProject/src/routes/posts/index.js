const {Router}=require('express')

const route=Router()

const {
    createNewPost,
    findMyPosts,
    findAllPosts
}=require('../../controllers/posts')

route.get('/',async(req,res)=>{
    const post=await findAllPosts()
    .catch((err)=>{console.log(err)})
    res.status(200).send(post)
}
)

route.get('/:id',async(req,res)=>{
    const post=await findMyPosts(req.params.id)
    .catch((err)=>{console.log(err)})
    res.status(200).send(post)
})


route.post('/',async(req,res)=>{
    const{userId,title,body}=req.body;
    
    if((!userId)||(!title)||(!body)){
        res.status(400).send({
            error: 'Need userid, title or body to create post '
        })
    }
    const posts=await createNewPost(userId,title,body)
    try{res.status(200).send(posts)}
    catch{(err)=>{console.log(err)}}
})

module.exports={
    postsRoute:route}