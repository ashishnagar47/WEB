

const Adjective=[
    'disgusting','tricky','wicked','crooked','needless','tedious','gorgeous'
]

const Objects=[
    'Guitar','Bagpipes','Drum','Tuba','Recorder','Triangle','Crystal'
]

function genRandomUserName(){
    const adj=Adjective[Math.floor(Math.random()*7)]
    const obj=Objects[Math.floor(Math.random()*7)]
    return `${adj}-${obj}`;
}

module.exports={
    genRandomUserName
}


//Testing
// console.log(genRandomUserName());
// console.log(genRandomUserName());
// console.log(genRandomUserName());
// console.log(genRandomUserName());
// console.log(genRandomUserName());