const drivers=require('../Models/driversSchema')

// add drivers
exports.adddriver = async (req,res)=>{
    // console.log(req.body);
   try {
    const newdriver=new drivers(req.body);
    await newdriver.save();
    return res.status(200).json(newdriver)
   } catch (error) {
    console.log(error);
    res.status(500).json(error)
   }
}
// get drivers
exports.getallDrivers = async (req,res)=>{
    try {
        const alldrivers = await drivers.find();
        res.status(200).json(alldrivers)
     } catch (error) {
        res.status(404).json("error",+error)
     }
}
// get single driver
exports.getAdriver = async (req,res,next)=>{
    const {id} = req.params

    try {
        const singledriver = await drivers.findOne({_id:id})
        res.status(200).json(singledriver)
    } catch (error) {
        res.status(404).json("eroor",+error)
    }
} 
// edit drivers
exports.editdriver = async (req,res,next)=>{
    // _ kodthnnu
    const { id }=req.params;
    const {  Name, Phone, Age, Email}=req.body;
    try {
      const editdriver = await drivers.findByIdAndUpdate(
        {_id:id},
        { Name, Phone , Age, Email},
        {new:true}
      );
      await editdriver.save();
      res.status(200).json(editdriver)
    } catch (error) {
        console.log(error);
        res.status(404).json("error",+error)
    }
}
// delete driver
exports.deletedriver = async (req,res,next)=>{
    const {id} =req.params;

    try {
       const deletedriver = await drivers.findByIdAndDelete({_id:id});
       res.status(200).json(deletedriver)
    } catch (error) {
        res.status(404).json("error",+error)
    }
}
