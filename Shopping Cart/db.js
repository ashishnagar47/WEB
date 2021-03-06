const Sequelize=require('sequelize')

const db=new Sequelize('shopdb','shopper','shoppass',{
    host: 'localhost',
    dialect: 'mysql'
})

const User=db.define('users',{
    id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true
    },

    name:{
    type:Sequelize.STRING,
    allowNull:false
    }
})

const Product=db.define('products',{
    id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true
    },
    
    name:{
    type:Sequelize.STRING,
    allowNull:false
    },
    manufacturer:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
     type:Sequelize.FLOAT,
     allowNull:false,
     defaultValue:0.0  
    }
})

db.sync()
    .then(()=>console.log("Databse has been synced"))
    .catch((err)=>console.log(err))
module.exports={
    User,Product
}


