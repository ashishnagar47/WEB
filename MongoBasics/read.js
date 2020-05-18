const {MongoClient  }=require('mongodb')

const MONGO_URL='mongodb://localhost:27017'
const DB_NAME='tododb';

async function readTask() {
    const client= await MongoClient.connect(MONGO_URL,{ useUnifiedTopology: true })
    const tododb=client.db(DB_NAME)

    const todos=tododb.collection('todos')

    const todoArr=await todos.find({priority:{$exists:false}}).toArray()

    todoArr.forEach((todo)=>console.log(JSON.stringify(todo)))

    
}
readTask()

