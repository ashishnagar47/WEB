
let inp=document.getElementById('inp')
let btnSubmit=document.getElementById('btnSubmit')
let inpList=document.getElementById('inpList')

btnSubmit.onclick=function(){
    inpList.innerText=''
    for(let x=1;x<=inp.value;x++){
        let li=document.createElement('li')
        let print=''
        
        if(x%3==0){
            print+='fizz'
        }
         if(x%5==0){
            print+='buzz'
        }
         
        if(print==''){
            print=x
        }
        li.textContent=print

        inpList.appendChild(li)
    }
}



