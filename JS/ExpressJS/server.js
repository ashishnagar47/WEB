const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.listen(4444,()=>{
    console.log('server started on http://localhost:4444')
})
