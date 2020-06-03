const  express=require('express')

const {db}=require('./db/models')
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const {usersRoute}=require('./routes/users')
const {postsRoute}=require('./routes/posts')
const {commentsRoute}=require('./routes/posts/comments')

app.use('/api/users',usersRoute)
app.use('/api/posts',postsRoute)
app.use('/api/comments',commentsRoute)
app.use('/',express.static(__dirname+'/src/public'))



db.sync()
    .then(()=>{
        app.listen(4567,()=>{
            console.log('server started on http://localhost:4567');
        })
    })
    .catch((err)=>{
        console.error(new Error('Could not start database'))
        console.error(err);
    })


        
    
