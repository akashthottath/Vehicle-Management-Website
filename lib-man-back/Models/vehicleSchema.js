const mongoose=require ('mongoose')

const vehicleSchema = new mongoose.Schema({

    Name: {
        type: String,
        required:true
    },
    Image: {
        type: String,
        required:true
    },
    Brand:{
        type: String,
        required:true
    },
    Price: {
        type: Number,
        required:true
    },
    assignedname:{
        type:Array
    },
    vehicledue:{
        type:Boolean
    }
},
{timestamps:true}
)
const vehicles=mongoose.model("vehicles",vehicleSchema)
module.exports=vehicles;
