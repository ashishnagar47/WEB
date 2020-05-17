  // const express = require('express')
  // const http = require('http')
  // const socketio = require('socket.io')
  
  // const app = express()
  // const server = http.createServer(app)
  // const io = socketio(server)
  
  // app.use('/', express.static(__dirname + '/public'))
  
  // io.on('connection', (socket) => {
    
  //   console.log('connection', socket.id)
    
  // })
  
  
  // server.listen(4646, () => {
  //   console.log('server started on http://localhost:4646')
  // })

  const express=require('express')
  const http=require('http')
  const socket=require('socket.io')

  const app=express()
  const server=http.createServer(app)
  const io=socket(server)

  app.use('/',express.static(__dirname+'/public'))

  io.on('connection',(socket)=>{
    console.log('connection',socket.id)
  })

  server.listen(4646,()=>{
    console.log('server on http://localhost:4646')
  })


