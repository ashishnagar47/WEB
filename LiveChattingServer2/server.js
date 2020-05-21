    const express=require('express')
    const http=require('http')
    const socket=require('socket.io')

    const app=express()
    const server=http.createServer(app)
    const io=socket(server)

    let users=[{
        'ashish':'ashish47'
    }]
    let socketMap={}

    io.on('connection',(socket)=>{
        console.log('connected with socket id=',socket.id)

        function login(s,u){
            s.join(u)
            s.emit('logged_in')
            socketMap[s.id]=u
            console.log(socketMap)
        }

        socket.on('login',(data)=>{
            if(users[data.username]){
                if(users[data.username]==data.password){
                   login(socket,data.username)
                }
                else{
                    socket.emit('login_failed') 
                }
            }else{
            users[data.username]=data.password
            login(socket,data.username)}
        })
        //console.log(users)

        socket.on('msg_send',(data)=>{
            data.from=socketMap[socket.id]
            if(data.to){
                io.to(data.to).emit('msg_rcvd',data)
            }
            else{
                socket.broadcast.emit('msg_rcvd',data)
            }
        })
    })

    

    app.use('/',express.static(__dirname+ '/public'))

    server.listen(3344,()=>{
        console.log('server started on http://localhost:3344')
    })
