const{db,Season,Teacher,Batch,Course}=require('./model')

const seed=async()=>{
    try{
        db.sync({alter:true})

        await Batch.bulkCreate([
            {id:'1', name:'Pitampura', city:'New Delhi'},
            {id:'2', name:'Dehradun', city:'Dehradun'},
            {id:'3', name:'Dwarka', city:'New Delhi'},
            {id:'4', name:'Live', city:'Online'},
            {id:'5', name:'Kohat Enclave', city:'New Delhi'}
        ])
    } catch(err){
            console.log(err)
    }
}
seed()