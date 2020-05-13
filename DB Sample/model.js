const Sequelize=require('sequelize')
const datatypes=Sequelize.DataTypes;

const db=new Sequelize('sampledb1','sampleuser1','samplepass1',{
    host: 'localhost',
    dialect:'mysql'
})

const Student=db.define('stud',{
    name: {
        type:datatypes.STRING(40),
        allowNull: false
    },
    age:{
        type: datatypes.INTEGER(2),
        allowNull:false,
        defaultValue:0
    }
})

const Course=db.define('course',{
    id: {
        type:datatypes.INTEGER(8),
        primaryKey:true
    },
    name: datatypes.STRING(20)
})

const Teacher=db.define('teacher',{
    id:{
        type: datatypes.INTEGER(8),
        primaryKey:true
    },
    name:datatypes.STRING(20)
})

const Batch=db.define('batch',{
    id:{
        type:datatypes.INTEGER(8),
        primaryKey:true
    },
    name:{
        type:datatypes.STRING(20),
        allowNull:false},
    city:{
        type:datatypes.STRING(20),
        allowNull:false
    }
})

const Season=db.define('season',{
    id:{
        type:datatypes.INTEGER(8),
        primaryKey:true
    },
    name:{
        type:datatypes.STRING(20),
        allowNull:false}
})

Batch.belongsTo(Course)
Batch.belongsTo(Season)

Course.hasMany(Batch)
Season.hasMany(Batch)

db.sync();

module.exports={
    db,Student,Course,Teacher,Batch,Season
}
    