const Sequelize=require('sequelize')

const db=new Sequelize({
    dialect:'mysql',
    database:'oauth',
    username:'oauthUser',
    password:'oauthPass'
})

const COL_ID_DEF={
    type:Sequelize.DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
}

const COL_NAME_DEF={
    type:Sequelize.DataTypes.STRING(30),
    //allowNull:false,
    
}

const User=db.define('user',{
    id:COL_ID_DEF,
    username:COL_NAME_DEF,
    email:{type:Sequelize.DataTypes.STRING},
    password:{type:Sequelize.DataTypes.STRING},
    
},
)

module.exports={db,User};

// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });

// const User = mongoose.model('User', UserSchema);

//qlmodule.exports = User;