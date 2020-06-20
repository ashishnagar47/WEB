const express = require('express');
const router = express.Router();
//const bcrypt = require('bcrypt');
const {createUser}=require('../controller/users')
//const passport = require('passport');
// Load User model
const {User} = require('../models/User');
const {passport}=require('../config/passport')
// Login Page
router.get('/login',  (req, res) => res.render('login'));

// Register Page
router.get('/register', (req, res) => res.render('register'));

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
router.post('/login', async(req, res) => {
  const user =await  User.findOne({where: {email: req.body.email }})
  if (!user) {
    return res.status(404).render('login', { msg: 'No such email found' })
  }

  if (user.password !== req.body.password) {
    return res.status(401).render('login', { msg: 'Incorrect password' })
  }
  req.session.userId = user.id
  res.redirect('/dashboard')
//   
 });

 router.get('/dashboard', async (req, res) => {
  if (!req.session.userId) {
    return res.redirect('/login')
  }
  const user = await Users.findByPk(req.session.userId)
  res.render('dashboard', user )
})


// // Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;