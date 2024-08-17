const vehicles=require('../Models/vehicleSchema')

// add vehicle
exports.addvehicle=async(req,res,next)=>{
    try {
        const newvehicle=new vehicles(req.body);
        await newvehicle.save();
        res.status(200).json(newvehicle)
    } catch (error) {
        console.log("Error Found",error);
        res.status(404).json(error)
    }
}
// get cars
exports.getallcars = async (req,res)=>{
    try {
        const allcars = await vehicles.find();
        res.status(200).json(allcars)
     } catch (error) {
        res.status(404).json(error)
     }
}

// get single cars
exports.getAvehicle = async (req,res,next)=>{
    const {id} = req.params

    try {
        const singlevehicle = await vehicles.findById({_id:id})
        res.status(200).json(singlevehicle)
    } catch (error) {
        res.status(404).json("eroor",+error)
    }
} 
// edit vehicles
exports.editvehicle=async(req,res,next)=>{
    const {id}=req.params;
    
    const { Name,Image,Brand,Price,assignedname,vehicledue}=req.body

    try {
        const editvehicle = await vehicles.findById(id);

            const editassignedName=editvehicle.assignedname.concat(assignedname);
           
            editvehicle.Name=Name;
            editvehicle.Image=Image;
            editvehicle.Brand=Brand;
            editvehicle.Price=Price;
            editvehicle.assignedname=editassignedName;
            editvehicle.vehicledue=vehicledue;

        await editvehicle.save();
        res.status(200).json(editvehicle);
    } catch (error) {
       console.log("error",+error); 
       res.status(404).json(error);
    }
}


// delete driver
exports.deletecar = async (req,res,next)=>{
    const {id} =req.params;

    try {
       const deletecar = await vehicles.findByIdAndDelete({_id:id});
       res.status(200).json(deletecar)
    } catch (error) {
        res.status(404).json("error",+error)
    }
}