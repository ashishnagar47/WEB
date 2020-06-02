const express=require('express')
const http=require('http')
const socket=require('socket.io')

const app=express()
const server=http.createServer(app)
const io=socket(server)

io.on('connection',(socket)=>{
  console.log("socketId is",socket.id )

  socket.on('msg_send',(data)=>{
    console.log('msg_rcvd: ', data.msg)
  })
})

app.use('/',express.static(__dirname+'/public'))

server.listen('4567',
  console.log('server started on http://localhost:4567'))