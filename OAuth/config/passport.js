// const LocalStrategy = require('passport-local').Strategy;
// //const bcrypt = require('bcryptjs');
// const passport=require('passport')
// // Load User model
// const {User} = require('../models/User');

// module.exports = function(passport) {
//   passport.use(
//     new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
//       // Match user
//       User.findOne({where:{
//         email: email
//       }}).then(user => {
//         if (!user) {
//           return done(null, false, { message: 'That email is not registered' });
//         }

//         // Match password
//         User.findOne({where:{
//             password: password
//           }}).then(user => {
//             if (!user) {
//               return done(null, false, { message: 'That email is not registered' });
//             }
//             if (user.password !== req.body.password) {
//               return done(null,false, { message: 'Incorrect password' })
//             }
            
//         });
//       });
//     })
//   );

//   // passport.serializeUser(function(user, done) {
//   //   done(null, user.id);
//   // });

//   // passport.deserializeUser(function(id, done) {
//   //   User.findById(id, function(err, user) {
//   //     done(err, user);
//   //   });
//   // });
// };