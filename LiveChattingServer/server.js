    const express=require('express')
    const http=require('http')
    const socket=require('socket.io')

    const app=express()
    const server=http.createServer(app)
    const io=socket(server)
    
    io.on('connection',(socket)=>{
        console.log('connected with socket id=',socket.id)

        socket.on('msg_send',(data)=>{
            io.emit('msg_rcvd',(data))
        })
    })

    app.use('/',express.static(__dirname+ '/public'))

    server.listen(3344,()=>{
        console.log('server started on http://localhost:3344')
    })
