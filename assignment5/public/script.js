let inpCode = document.getElementById('inpCode')
let btnEncode = document.getElementById('btnEncode')
let btnEncrypt = document.getElementById('btnEncrypt')

let code = document.getElementById('code')

btnEncode.onclick = function () {
    let data = inpCode.value 
    data = btoa(data)
    code.value = data
}

btnEncrypt.onclick = function () {
    let data = code.value
    data = encryptData(data)
    code.value = data
}



function encryptData(rawData) {
    let str=rawData;
    len=str.length;
    let p="";
    let k;
    for(i=0;i<len;i++){
        ch=str.charAt(i);
        if(ch >= 'a' && ch <= 'z'){
           k=ch.toUpperCase(); 
        }
        else if(ch >='A' && ch <= 'Z'){
            k=ch.toLowerCase();
        }
        else{
            k=ch;
        }
        p=p+k;
    }
    /*
        TODO: actually encrypt data
        logic: turn lowercase chars to uppercase and viceversa 
     */
    return p;
}
