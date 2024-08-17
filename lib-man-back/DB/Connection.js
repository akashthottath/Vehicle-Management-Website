const mongoose=require('mongoose')
const ConnectionString=process.env.DATABASE_URL

mongoose.connect(ConnectionString).then(()=>{
    console.log('libraryManagement Successfully Connected to MongoDb');
}).catch((err)=>{
    console.log(`MongoDb Connection Failed ERROR:${err}`);
})

