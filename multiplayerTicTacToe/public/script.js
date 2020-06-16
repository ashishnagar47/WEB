let socket=io()


const STARTED=0
const ENDED=1
let a;
const playerSpan=document.getElementById('player')
const gameTable=document.getElementById('game')

const game={
    state:STARTED,
    turn:'X',
    move:0
}

function nextTurn(){
    if(game.state===ENDED)return

    game.move++ 
    if(game.turn==='X'){
        game.turn='O'
    }
    else{
        game.turn='X'
    }
    if(game.move===9){
        //alert("Game Over")
        endGame()
    }

    playerSpan.textContent = game.turn
}

function endGame(winner){
    if(winner){
        alert('Game Over | Winner' + winner)
    }
    else{
        alert('Game Over | Draw')
    }
    game.state=ENDED
}

function isSeqCaptured(arrayof3cells){
    let winningCombo=game.turn+game.turn+game.turn
    if(arrayof3cells.map(i=>i.textContent).join('')===winningCombo){
        //alert('Game Over | Winner = ' + game.turn)
        endGame(game.turn)
    }
}

function isRowCaptured(row){
    let tableRow= Array.from(gameTable.children[0].children[row-1].children)
    let winningCombo=game.turn+game.turn+game.turn
    if(tableRow.map(i=>i.textContent).join('')===winningCombo){
       // alert('Game Over | Winner = ' + game.turn)
       endGame(game.turn)
    }
}

function isColCaptured(col){
    let tableCol=[
        gameTable.children[0].children[0].children[col-1],
        gameTable.children[0].children[1].children[col-1],
        gameTable.children[0].children[2].children[col-1]
    ]
    let winningCombo=game.turn+game.turn+game.turn
    if(tableCol.map(i=>i.textContent).join('')===winningCombo){
       // alert('Game Over | Winner = ' + game.turn)
       endGame(game.turn)
    }
}

function isDiagCaptured(row,col){
    if(row!==col && (row+col)!==4){
        return
    }
    let diag1=[
        gameTable.children[0].children[0].children[0],
        gameTable.children[0].children[1].children[1],
        gameTable.children[0].children[2].children[2]
    ]
    let diag2=[
        gameTable.children[0].children[0].children[2],
        gameTable.children[0].children[1].children[1],
        gameTable.children[0].children[2].children[0]
    ]
    isSeqCaptured(diag1)
    isSeqCaptured(diag2)
}

function boxClicked(row,col){
    
    if(game.state===ENDED){
        alert('Restart Game')
        return
    }
    console.log('box clicked = ',row,col)
    let clickedBox=gameTable.children[0].children[row-1].children[col-1]
    socket.emit('clicked_box',{
        click:clickedBox
    })
     socket.on('show_clickBox',(data)={
        a=`${data.click}`
     })

     a.textContent=game.turn
   // clickedBox.textContent=game.turn

    isRowCaptured(row)
    isColCaptured(col)
    isDiagCaptured(row,col)
    
    nextTurn()
    
}

function restartGame(){
    if(Math.random()>0.5)game.turn='O'
    else game.turn='X'

    game.state=STARTED
    game.move=0

    Array.from(document.getElementsByTagName('td')).forEach(cell=>{
        cell.textContent=''
    })
}