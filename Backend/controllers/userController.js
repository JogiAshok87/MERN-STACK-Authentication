const userSchema =  require('../models/Register')

exports.getUsers = async(req,res)=>{
    
    try {
        const allUsers = await userSchema.find();
        res.status(201).json(allUsers);
      } catch (error) {
        res.status(400).send({ error: error.message });
      }

}

exports.updateUser = async(req,res)=>{
    try{
        const user = await userSchema.findByIdAndUpdate(req.params.id, req.body, {new: true})
      if(user){
        res.send(user)
      }else{
        res.status(404).send({message:"User Not Found"})
      }
      }catch(err){
        console.log(err)
        res.status(500).send({message:"Internal Server Error"})
      }
    
}

exports.deleteUser = async(req,res) =>{
    try{
        const user = await userSchema.findByIdAndDelete(req.params.id)
      res.status(200).send({message:"Uer deleted successfully"})
      }catch(err){
        res.status(500).send({error:"Failed to delete user"})
      }


}


