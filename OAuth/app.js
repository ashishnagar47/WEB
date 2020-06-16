const express=require('express')
const authroute=require('./routes/auth.js')
const users=require('./routes/users.js')

const app=express()
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/',authroute)
app.use('/users',users)

// app.get('/',(req,res)=>{
//     res.render('index')
// })

app.listen(8866,()=>{
    console.log('server started on http://localhost:8866')
})