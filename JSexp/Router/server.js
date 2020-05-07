const express=require('express');
const server=express();

const teacherRoute=require('./Router/teacher')
const studentRoute=require('./Router/student')

server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use('/student',studentRoute);
server.use('/teacher',teacherRoute);


server.listen(4000)