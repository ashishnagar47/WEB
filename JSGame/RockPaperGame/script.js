
let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let rock=document.getElementById('rockB')
let paper=document.getElementById('paperB')
let scissor=document.getElementById('scissorB')
let start =document.getElementById('startB')
let end=document.getElementById('endB')

let value=[
    '🤛','🖐️','🖖'
]

function getRandomValue() {
    return value[Math.floor(Math.random() * 3)]
}

let animationId;

function updateAnimation(newSpeed) {
    
    if (animationId) clearInterval(animationId)

    animationId = setInterval(() => {
        value2.innerText = getRandomValue()
    
    }, 1000 / newSpeed)
   
}

rock.onclick=function(){
    value1.innerText='🤜';
}

scissor.onclick=function(){
    value1.innerText='🖖';
}

paper.onclick=function(){
    value1.innerText='🖐️';
}
let v=10;
end.onclick=function(){
    document.documentElement.style.setProperty('--speed',0)
    clearInterval(animationId)
}

start.onclick=function(){
    document.documentElement.style.setProperty('--speed',v);
    updateAnimation(v);
}