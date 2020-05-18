
window.onload=function(){

let todolist1=document.getElementById('todoList')
let addtask1=document.getElementById('addTask')
let newtask1=document.getElementById('newTask')

    addtask1.onclick=function(){
        let li=document.createElement('li')
       // li.innerText=newtask1.value
        
        //Delete element
        let xbtn=document.createElement('button')
        xbtn.innerText=("⛔")
        xbtn.onclick=function(event){
            console.log(event.target.parentElement.remove())
        }

        //UpButton
        let upbtn=document.createElement('button')
        upbtn.innerText=('⏏')
        upbtn.onclick=function(event){
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement,//insert this element
                event.target.parentElement.previousElementSibling //before this element
            )
        }

        //down button
        let dnbtn=document.createElement('button')
        dnbtn.innerText=('⬇️')
        dnbtn.onclick=function(event){
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling, //insert next element
                event.target.parentElement,//before current element
            )
        }



        //Add Element
        taskSpan=document.createElement('span')
        taskSpan.innerText=newtask1.value

        li.appendChild(xbtn)
        li.appendChild(taskSpan)
        li.appendChild(upbtn)
        li.appendChild(dnbtn)
        todolist1.appendChild(li)
}
}