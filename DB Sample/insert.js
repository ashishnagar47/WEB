const {db,Student}=require('./model')

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
