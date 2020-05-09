const {db,Student}=require("./model")

const task=async()=>{
    try{
        await db.sync();

        const students=await Student.findAll();
        students.forEach(students=>console.log(`
        name:  ${students.dataValues.name}\t\t age: ${students.dataValues.age}
        `))

    }catch(err){
        console.error(err);
    }
}

task();