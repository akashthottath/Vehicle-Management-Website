const mongoose=require ('mongoose')

const diverSchema = new mongoose.Schema({


    Name: {
        type: String,
        required:true
    },
    Phone:{
        type:Number,
        required:true,
    },
    Age: {
        type: Number,
        required:true
    },
    Email: {
        type: String,
        required:true,
    }

})
const drivers=mongoose.model("drivers",diverSchema)
module.exports=drivers;
