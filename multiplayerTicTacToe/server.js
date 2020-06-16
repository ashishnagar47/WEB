const express=require('express')
const http=require('http')
const  socket=require('socket.io')

const app=express()
const server=http.createServer(app)
const io=socket(server)

io.on('connection',(socket)=>{
    console.log("connected with socketId")

    socket.on('clicked_box',(data)=>{
        socket.broadcast.emit('show_clickBox',data)
    })
})

app.use('/',express.static(__dirname+"/public"))

server.listen('4785',()=>{
    console.log('server has started on http://localhost:4785')
})

