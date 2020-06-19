const express = require('express');
const router = express.Router();
//const bcrypt = require('bcrypt');
const {createUser}=require('../controller/users')
const passport = require('passport');
// Load User model
const {User} = require('../models/User');
//const { forwardAuthenticated } = require('../config/auth');

// Login Page
router.get('/login',  (req, res) => res.render('login'));

// Register Page
router.get('/register', (req, res) => res.render('register'));

// router.post('/register',(req,res)=>{
//     console.log(req.body)
//     res.send('hello')
// })

// Register
router.post('/register', async(req, res) => {
  console.log(req.body)
   var { username, email, password,password2}=req.body;
  let errors = [];

  if (!username || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      username,
      email,
      password,
      password2
    });
  } 
  else {
    User.findOne({where:({ email: email })})
    .then(user => {
      if (user) {
    
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          username,
          email,
          password,
          password2
        });
      } 
     else {
       // const hashPassword= bcrypt.hash(req.body.password,10)
        const newUser = createUser(
          username,
          email,
          password
            );
            // console.log(newUser);
            // res.send('hello')
            try{res.status(200).redirect('/users/login')}
            catch{(err)=>console.log(err)}
      }
    });
  }
});

// // Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

router.get('/dashboard', async (req, res) => {
  if (!req.session.userId) {
    return res.redirect('/login')
  }
  const user = await Users.findByPk(req.session.userId)
  res.render('profile', { user })
})

// // Logout
// router.get('/logout', (req, res) => {
//   req.logout();
//   req.flash('success_msg', 'You are logged out');
//   res.redirect('/users/login');
// });

module.exports = router;