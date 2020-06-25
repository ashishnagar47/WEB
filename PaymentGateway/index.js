const express=require('express')

const app=express()

require('./route')(app)

app.listen(5000,()=>{
    console.log("server started on http://localhost:5000")
})