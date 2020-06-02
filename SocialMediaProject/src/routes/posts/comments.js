const {Router}=require('express')

const commentsRoute=Router()

const{showComments,
    createNewComment
    }=require('../../controllers/comments')

commentsRoute.get('/',async(req,res)=>{
    const comment=await showComments(req.query)
        res.status(200).send(comment)
})

commentsRoute.post('/',async(req,res)=>{
    const{postId,userId,title,body}=req.body;
    if((!postId)||(!title)||(!body)){
        res.status(400).send({
            error: 'Need postid, title or body to create comment '
        })
    }
    const comment=await createNewComment(postId,userId,title,body)
        res.status(200).send(comment)
    
})



module.exports={
    commentsRoute}