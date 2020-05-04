const express = require('express')

const app = express()

app.use('/', express.static(__dirname + '/public'))

function decryptQueryParams(req, res ,next) {
    let str='';
    let p="";
    if(req.query.code){
        str=req.query.code;
        len=str.length;
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
    }
    req.query=p;
    // TODO: decrypt all query params as per our logic

    next()
}

function decodeQueryBase64(req, res, next) {
    //for (let q in req.query) {
        let data = req.query 
        data = Buffer.from(data, 'base64').toString('ascii')
        req.query = data
    //}
    next()
}

app.get('/eval', decryptQueryParams, decodeQueryBase64, (req, res) => {
   // console.log(req.query)
    let y=req.query;
   y = y.replace(/"/g,"");
   console.log(y)
    y=eval(y);
    console.log(y);
    // TODO: eval the code actually
    res.send(JSON.stringify(y));
   // res.send(y)
})

app.listen(4545, () => {
    console.log('server started on http://localhost:4545')
})