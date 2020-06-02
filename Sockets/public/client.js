
let socket=io()

let btnSend=document.getElementById('btnSend')
let msgList=document.getElementById('msgList')
let inpMsg=document.getElementById('inpMsg')

btnSend.onclick=function(){
    socket.emit('msg_send',{
        msg: inpMsg.value
    })
    inpMsg.value
}