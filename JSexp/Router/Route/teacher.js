const express=require('express');
const Router=express.Router;
const route=Router();

let teacher=[
    {'name':'Arnav','subject':'Web Dev'},{'name':'Prateek','subject':"C++"},
    {'name':"Shubham",'subject': "Java"},{'name':"Anuj",'subject': "Python"}
]

route.get('/',(req,res)=>{
    res.send(teacher);
})

route.get('/add',(req,res)=>{
    teacher.push({
        name:req.query.name ,
        subject:req.query.subject
    })
    res.send(teacher);
})

route.get('/:id',(req,res)=>{
    res.send(teacher[req.params.id])
})
module.exports=route;

