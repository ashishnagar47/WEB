  
let inpNum = document.getElementById('inpNum')
let btnPrint = document.getElementById('btnPrint')
let ulNumlist = document.getElementById('ulNumlist')

btnPrint.onclick = function () {

    let start = Date.now()
    ulNumlist.innerHTML = ''

    for (let i = 1; i <= inpNum.value; i++) {
        let li = document.createElement('li')
        
        let print = ""
        if (i % 3 == 0) print += "fizz"
        if (i % 5 == 0) print += "buzz"
        if (print === '') print = i

        li.textContent = print
        
        
        ulNumlist.appendChild(li)
    }

    console.log('time taken', Date.now() - start)

}