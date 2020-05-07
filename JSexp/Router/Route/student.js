const express=require('express');
const Router=express.Router;
const route=Router();

let student=[
    {'name':'Arnav','college':'MAIT'},{'name':'Prateek','college':"NIEC"},
    {'name':"Shubham",'college': "BPT"},{'name':"Anuj",'college': "ADGITM"}
]

route.get('/',(req,res)=>{
    res.send(student);
})

route.post('/',(req,res)=>{
    student.push({
    name:req.body.name,
    college:req.body.college})
    res.send(student);
})

route.get('/:id',(req,res)=>{
    res.send(student[req.params.id]);
})

module.exports=route;