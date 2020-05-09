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

module.exports={
    db,Student
}
    