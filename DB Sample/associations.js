//const {DataTypes}=require('sequelize')
const Sequelize=require('sequelize')
const dataTypes=Sequelize.DataTypes;

  const {db} =require('./connection')

// const db=new Sequelize('sampledb1','sampleuser1','samplepass1',{
//     host: 'localhost',
//     dialect:'mysql'
// })

const Course=db.define('course',{
    id:{
        type: dataTypes.INTEGER(8),
        primaryKey:true
    },
    name: dataTypes.STRING(20)
})

const Teacher=db.define('teacher',{
    id:{
        type: dataTypes.INTEGER(8),
        primaryKey:true
    },
    name:dataTypes.STRING(20)
})

const Batch=db.define('batch',{
    id:{
        type:dataTypes.INTEGER(8),
        primaryKey:true
    },
    name:{
        type:dataTypes.STRING(20),
        allowNull:false},
    city:{
        type:dataTypes.STRING(20),
        allowNull:false
    }
})

const Season=db.define('season',{
    id:{
        type:dataTypes.INTEGER(8),
        primaryKey:true
    },
    name:{
        type:dataTypes.STRING(20),
        allowNull:false}
})

Batch.belongsTo(Course)
Batch.belongsTo(Season)

Course.hasMany(Batch)
Season.hasMany(Batch)

db.sync();