const express=require('express')
const router=express.Router();
const bcrypt=require('bcrypt')
const {User}=require('../models/db')

// app.use(expressLayouts);
// app.set('view engine', 'ejs');


router.get('/login',(req,res)=>res.render('login'))

router.post('/login',(req,res)=>res.render('login'))

router.get('/register',(req,res)=>res.render('register'))

router.post('/register',async(req,res)=>{
    
    const { name, email, password, password2 } = req.body;
    let errors = [];

    if (!name || !email || !password || !password2) {
        errors.push({ msg: 'Please enter all fields' });
    }

    if (password != password2) {
        errors.push({ msg: 'Passwords do not match' });
    }

    if (password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters' });
    }

    if (errors.length > 0) {
        res.render('register', User.create({
          errors,
          name,
          email,
          password,
          password2
        }));
    }
    else{
        User.findOne({ email: email }).then(user => {
            if (user) {
              errors.push({ msg: 'Email already exists' });
              res.render('register', {
                errors,
                name,
                email,
                password,
                password2
              });
            } else {
              const newUser = new User({
                name,
                email,
                password
              });
              console.log(newUser)
              res.send('hello')
            }
        })
    }
    }



    // try{
    //         const hashPassword=await bcrypt.hash(req.body.password,10)

    //         const user=await User.create({
    //              name=req.body.name,
    //              email=req.body.email,
    //              password=hashPassword,
    //              password2=hashPassword
    //         })
            
           
            
    
    // catch{
    //     //console.log(user)
    //     res.redirect('users/register')
    // }
)


module.exports=router;