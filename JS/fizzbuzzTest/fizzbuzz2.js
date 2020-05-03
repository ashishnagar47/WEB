let inpNum = document.getElementById('inpNum')
let btnPrint = document.getElementById('btnPrint')
let ulNumlist = document.getElementById('ulNumlist')

btnPrint.onclick = function () {

    let start = Date.now()
    ulNumlist.innerHTML = ''

    let c3 = 0
    let c5 = 0;
    for (let i = 1; i <= inpNum.value; i++) {
        let li = document.createElement('li')
        c3++
        c5++

        let print = ""
        if (c3 == 3) { c3 = 0; print += "fizz" } 
        if (c5 == 5) { c5 = 0; print += "buzz" }
        if (print === '') print = i

        li.textContent = print
        
        
        ulNumlist.appendChild(li)
    }

    console.log('time taken', Date.now() - start)

}
