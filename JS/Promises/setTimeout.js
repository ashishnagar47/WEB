let btnWait1 = document.getElementById('btnWait1')
let inpTimeout1 = document.getElementById('inpTimeout1')
let btnCancel1=document.getElementById('btnCancel1')

var t;
function wait1(timeout, done) {
  if (isNaN(parseInt(timeout))) {
    return done(new Error('Timeout must be a number'))
  }

  t=setTimeout(() => {
    done(null)
  }, timeout)
}

function cancel1(){
  clearTimeout(t);
  console.log("wait cancel")

}

btnWait1.onclick = function () {
  wait1(inpTimeout1.value, (err) => {
    if (err) console.error(err) 
    else console.log('wait over')
  })
}


btnCancel1.onclick=cancel1
