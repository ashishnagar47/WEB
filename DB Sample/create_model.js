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

const task=async()=>{
    try{
        await db.sync({alter:true})
        for(let i=0;i<20;i++){
            await Student.create({
                name:(['tom','harry','jerry','mary','carry','oggy','noob','hack','jack','jill'])[parseInt(Math.random()*10)],
                age:1+[parseInt(Math.random()*10)]
            })
    }
    }
    catch(err){
        console.error(err);
    }
}
task();

db.sync({alter:true})
    .then(()=>console.log('Database synchronised'))
    .catch(console.error)

    